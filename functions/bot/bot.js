const { Telegraf } = require("telegraf");
// const session = require('telegraf/session');
// const questionsPotter = require("../../questions");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})


const questions = [
  {question: "Аппетит приходит во время еды, ", answer: "а жадность – во время аппетита."},

{question: "Бабушка гадала, надвое сказала, ", answer: "то ли дождик, то ли снег, то ли будет, то ли нет."},

{question: "Бедность – не порок, ", answer: "а несчастье."},

{question: "В здоровом теле здоровый дух – ", answer: "редкая удача."},

{question: "В семье не без урода, ", answer: "а из-за урода все не в угоду."},

{question: "Везет, как субботнему утопленнику – ", answer: "баню топить не надо."},

{question: "Ворон ворону глаз не выклюет, ", answer: "а и выклюет, да не вытащит."},

{question: "Всяк правду ищет, ", answer: "да не всяк её творит."},

{question: "Где тонко, там и рвётся, ", answer: "где толсто, там и наслаивается."},

{question: "Гладко было на бумаге, ", answer: "да забыли про овраги, а по ним ходить."},

{question: "Гол как сокол, ", answer: "а остер как топор."},

{question: "Голод не тетка, ", answer: "пирожка не поднесет."},

{question: "Горбатого могила исправит, ", answer: "а упрямого – дубина."},

{question: "Губа не дура, ", answer: "язык не лопата: знают, что горько, что сладко."},

{question: "Два сапога пара, ", answer: "да оба левые."},

{question: "Двое третьего ждут, ", answer: "а семеро одного не ждут."},

{question: "Девичий стыд – до порога, ", answer: "переступила и забыла."},

{question: "Дело мастера боится, ", answer: "а иной мастер дела."},

{question: "Дорога ложка к обеду, ", answer: "а там хоть под лавку."},

{question: "Дуракам закон не писан, ", answer: "если писан – то не читан, если читан – то не понят, если понят – то не так."},

{question: "Живем, хлеб жуем, ", answer: "а иногда и подсаливаем."},

{question: "За битого двух небитых дают, ", answer: "да не больно-то берут."},

{question: "За двумя зайцами погонишься – ", answer: "ни одного кабана не поймаешь."},

{question: "За морем веселье, ", answer: "да чужое, а у нас и горе, да своё."},

{question: "Зайца ноги носят, ", answer: "волка зубы кормят, лису хвост бережет."},

{question: "И делу время, ", answer: "и потехе час."},

{question: "И слепая лошадь везёт, ", answer: "коли зрячий на возу сидит."},

{question: "Комар лошадь не повалит, ", answer: "пока медведь не подсобит."},

{question: "Кто старое помянет – ", answer: "тому глаз вон, а кто забудет – тому оба."},

{question: "Курочка по зернышку клюет, ", answer: "а весь двор в помёте."},

{question: "Лиха беда начало, ", answer: "а там уж близок и конец."},

{question: "Лиха беда почин – ", answer: "есть дыра, будет и прореха."},

{question: "Молодые бранятся – ", answer: "тешатся, а старики бранятся – бесятся."},

{question: "На (обиженных) сердитых воду возят, ", answer: "а на добрых сами катаются."},

{question: "На чужой каравай рот не разевай, ", answer: "пораньше вставай да свой затевай."},

{question: "Не все коту масленица, ", answer: "будет и пост."},

{question: "Не печалится дятел, ", answer: "что петь не может, его и так весь лес слышит."},

{question: "Ни рыба, ни мясо, ", answer: "ни кафтан, ни ряса."},

{question: "Новая метла по-новому метёт, ", answer: "а как сломается - под лавкой валяется."},

{question: "Один в поле не воин, ", answer: "а путник."},

{question: "От работы кони дохнут, ", answer: "а люди – крепнут."},
];

let randomElement;
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
    console.log("Осталось вопросов:" + questionsPotter.length);
    return ctx.reply("Hello there");
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occurred");
  }
});

randomElement = generateQuestion();

bot.command("question", (ctx) => {
  ctx.reply(randomElement.question);
});

// bot.command("/", (ctx) => {
//     switch(ctx.message.text) {
//         case 'potter':
//             ctx.reply(randomElement.question);
//             break
//         case 'hello':
//             ctx.reply('Hi there!');
//             break
//         default:
//             ctx.reply('no command')
//     }
//   });

bot.on("message", (ctx) => {
  let userAnswer = ctx.message.text.toLowerCase();
  let correctAnswer = randomElement.answer.toLowerCase();
  if (
    questionsPotter.length == 1 &&
    userAnswer === correctAnswer
  ) {
    questionsPotter.splice(questionsPotter.indexOf(randomElement), 1);
    randomElement = generateQuestion();
    questionsPotter = questions.slice(0);
    console.log("Осталось вопросов:" + questionsPotter.length);
    ctx.reply("Верно! \n\n Это был последний вопрос.");
    // randomElement = generateQuestion();
  }
  else if (questionsPotter.length > 1 && userAnswer === correctAnswer) {
    questionsPotter.splice(questionsPotter.indexOf(randomElement), 1);
    randomElement = generateQuestion();
    console.log("Осталось вопросов:" + questionsPotter.length);
    ctx.reply("Верно!");
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