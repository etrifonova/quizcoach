const { Markup } = require("telegraf");

function getMenu() {
  return Markup.keyboard([
    ["/question", "/answer"],
  ])
    .oneTime()
    .resize()
}

function getKeyboard() {
 
return Markup.inlineKeyboard([
  Markup.button.callback("Coke", "Coke"),
  Markup.button.callback("Dr Pepper", "Dr Pepper", Math.random() > 0.5),
  Markup.button.callback("Pepsi", "Pepsi"),
])
}

module.exports = getMenu, getKeyboard;