const { Telegraf, Markup } = require("telegraf");
// const session = require('telegraf/session');
const questions = require("../../questions.js");
const bot = new Telegraf(process.env.BOT_TOKEN);
const getKeyboard = require("../../keyboard.js");


bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

let currentQuestions;
let randomElement;

// function generateQuestion() {
//   let questionsArray = currentQuestions.questions;
//   return questionsArray;
// }

const categories = [...new Set(questions.map((q) => q.category))];

bot.start((ctx) => {
  try {    
    return ctx.reply(
      "Выберите категорию:",
      Markup.inlineKeyboard(
        categories.map((category) =>
          Markup.button.callback(category, `CATEGORY_${category}`)
        )
      )
    );
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occurred");
  }
});

bot.action(/CATEGORY_(.+)/, (ctx) => {
  const selectedCategory = ctx.match[1];
  currentQuestions = questions.filter(
    (question) => question.category === selectedCategory
  );

  if (currentQuestions.length > 0) {
  randomElement = currentQuestions[0].questions.map((element) => element)[
    Math.floor(Math.random() * currentQuestions.length)
  ];
    console.log(randomElement);
    return ctx.reply(
      `Категория: ${selectedCategory}. Поехали!`,
      Markup.inlineKeyboard([
        Markup.button.callback("Вопрос", "Вопрос"),
      ])
    );
  } else {
    return ctx.reply("В этой категории пока нет вопросов.");
  }
});


// randomElement = generateQuestion();

// bot.command("question", (ctx) => {
//   ctx.reply(randomElement.question, 
// 		Markup.inlineKeyboard([
// 			Markup.button.callback("Ответ", "Ответ"),
//       Markup.button.callback("Подсказка", "Подсказка")
// 		]),);
// });

// bot.command("answer", (ctx) => 
// ctx.reply(randomElement.answer)
// )

bot.action("Вопрос", ctx => 
// ctx.reply(randomElement.question, 
//   Markup.inlineKeyboard([
//     Markup.button.callback("Ответ", "Ответ"),
//     Markup.button.callback("Подсказка", "Подсказка")
//   ]))

{
  try {
    return ctx.reply(
      "working!"
    );
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("NOT WORKING");
  }}

)

bot.action("Ответ", ctx => ctx.reply(randomElement.answer))

bot.action("Комментарий", ctx => ctx.reply(randomElement.comment))

bot.action("Подсказка", ctx => ctx.reply(randomElement.hint))

bot.on("message", (ctx) => {
  let userAnswer = ctx.message.text.toLowerCase();
  let correctAnswer = randomElement.answer.toLowerCase();
  let comment = randomElement.comment;
  
  if (currentQuestions.length == 1 && userAnswer === correctAnswer) {
    currentQuestions.splice(currentQuestions.indexOf(randomElement), 1);
    randomElement = currentQuestions.questions;
    currentQuestions = questions[1].questions.slice(0);
    ctx.reply("Верно! \n\n Это был последний вопрос.");
    randomElement = currentQuestions.questions;
  } else if (currentQuestions.length > 1 && userAnswer === correctAnswer) {
    currentQuestions.splice(currentQuestions.indexOf(randomElement), 1);
    randomElement = currentQuestions.questions;
    ctx.reply("Верно!" + " \n" + comment, 
		Markup.inlineKeyboard([
			Markup.button.callback("Вопрос", "Вопрос")
		]));
  } else {
    ctx.reply("Неверно!");
  }
});

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: "" };
  } catch (e) {
    console.error("error in handler:", e);
    return {
      statusCode: 400,
      body: "This endpoint is meant for bot and telegram communication",
    };
  }
};
