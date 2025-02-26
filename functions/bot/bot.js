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

function createKeyboard(categories, columns) {
  const keyboard = [];
  for (let i = 0; i < categories.length; i += columns) {
    keyboard.push(
      categories
        .slice(i, i + columns)
        .map((category) => Markup.button.callback(category, `CATEGORY_${category}`))
    );
  }
  return keyboard;
}

bot.start((ctx) => {
  try {
    const keyboard = createKeyboard(categories, 2); // Specify 2 columns per row
    return ctx.reply(
      "Выберите категорию:",
      Markup.inlineKeyboard(keyboard)
    );
  } catch (e) {
    console.error("Error in start action:", e);
    return ctx.reply("Error occurred");
  }
});


bot.action(/CATEGORY_(.+)/, (ctx) => {
  const selectedCategory = ctx.match[1];
  currentQuestions = [
    ...questions.filter((question) => question.category === selectedCategory)[0]
      .questions,
  ];

  randomElement = currentQuestions.map((element) => element)[
    Math.floor(Math.random() * currentQuestions.length)
  ];

  if (currentQuestions.length > 0) {
    return ctx.reply(
      `Категория: ${selectedCategory}. Gehen wir!`,
      Markup.inlineKeyboard([Markup.button.callback("Вопрос", "Вопрос")])
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

bot.action("Вопрос", (ctx) => {
  try {
    ctx.reply(
      randomElement.question,
      Markup.inlineKeyboard([
        Markup.button.callback("Ответ", "Ответ"),
        Markup.button.callback("Подсказка", "Подсказка"),
      ])
    );
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("NOT WORKING");
  }
});

bot.action("Ответ", (ctx) => ctx.reply(randomElement.answer));

bot.action("Комментарий", (ctx) => ctx.reply(randomElement.comment));

bot.action("Подсказка", (ctx) => ctx.reply(randomElement.hint));

bot.on("message", (ctx) => {
  let userAnswer = ctx.message.text.toLowerCase();
  let correctAnswer = randomElement.answer.toLowerCase();
  let comment = randomElement.comment;

  console.log(randomElement.answer);

  if (currentQuestions.length == 1 && userAnswer === correctAnswer) {
    currentQuestions.splice(currentQuestions.indexOf(randomElement), 1);
    const keyboard = createKeyboard(categories, 2); // Specify 2 columns per row
    ctx.reply("Верно! \n\n Это был последний вопрос. \n\n Выберите категорию:",
      Markup.inlineKeyboard(keyboard)
    );
  } else if (currentQuestions.length > 1 && userAnswer === correctAnswer) {
    currentQuestions.splice(currentQuestions.indexOf(randomElement), 1);
    randomElement = currentQuestions.map((element) => element)[
      Math.floor(Math.random() * currentQuestions.length)
    ];
    ctx.reply(
      "Верно!" +
        " \n\n" +
        comment +
        " \n\n" +
        "Осталось вопросов: " +
        currentQuestions.length,
      Markup.inlineKeyboard([Markup.button.callback("Вопрос", "Вопрос")])
    );
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
