const { Telegraf, Markup } = require("telegraf");
// const session = require('telegraf/session');
const questions = require("../../questions.js");
const bot = new Telegraf(process.env.BOT_TOKEN);
const getKeyboard = require("../../keyboard.js");


bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

let questionsPotter = questions.slice(0);

function generateQuestion() {
  randomElement = questionsPotter.map((element) => element)[
    Math.floor(Math.random() * questionsPotter.length)
  ];
  return randomElement;
}

bot.start((ctx) => {
  try {
    questionsPotter = questions.slice(0);
    console.log(questions)
    console.log("Осталось вопросов:" + questionsPotter.length);
    return ctx.reply("Поехали!",
		Markup.inlineKeyboard([
			Markup.button.callback("Вопрос", "Вопрос")
		]));
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occurred");
  }
});

randomElement = generateQuestion();

bot.command("question", (ctx) => {
  ctx.reply(randomElement.question, 
		Markup.inlineKeyboard([
			Markup.button.callback("Ответ", "Ответ"),
      Markup.button.callback("Подсказка", "Подсказка")
		]),);
});

bot.command("answer", (ctx) => 
ctx.reply(randomElement.answer)
)

bot.action("Вопрос", ctx => 
ctx.reply(randomElement.question, 
  Markup.inlineKeyboard([
    Markup.button.callback("Ответ", "Ответ"),
    Markup.button.callback("Подсказка", "Подсказка")
  ])))

bot.action("Ответ", ctx => ctx.reply(randomElement.answer))

bot.action("Комментарий", ctx => ctx.reply(randomElement.comment))

bot.action("Подсказка", ctx => ctx.reply(randomElement.hint))

bot.on("message", (ctx) => {
  let userAnswer = ctx.message.text.toLowerCase();
  let correctAnswer = randomElement.answer.toLowerCase();
  let comment = randomElement.comment;
  
  if (questionsPotter.length == 1 && userAnswer === correctAnswer) {
    questionsPotter.splice(questionsPotter.indexOf(randomElement), 1);
    randomElement = generateQuestion();
    questionsPotter = questions.slice(0);
    console.log("Осталось вопросов:" + questionsPotter.length);
    ctx.reply("Верно! \n\n Это был последний вопрос.");
    randomElement = generateQuestion();
  } else if (questionsPotter.length > 1 && userAnswer === correctAnswer) {
    questionsPotter.splice(questionsPotter.indexOf(randomElement), 1);
    randomElement = generateQuestion();
    console.log("Осталось вопросов:" + questionsPotter.length);
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
