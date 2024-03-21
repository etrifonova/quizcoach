const { Markup } = require("telegraf");
 
  function getKeyboard() {
   
  return Markup.inlineKeyboard([
    Markup.button.callback("/answer")
  ])
  }

  module.exports = getKeyboard;