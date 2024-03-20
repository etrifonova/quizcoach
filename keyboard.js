const { Markup } = require("telegraf");

module.exports = {
  // getMenu: () => {
  //   return Markup.keyboard([
  //     ["/question", "/answer"],
  //   ])
  //     .oneTime()
  //     .resize()
  // },
  
  getKeyboard: () => {
   
  return Markup.inlineKeyboard([
    Markup.button.callback("Coke", "Coke"),
    // Markup.button.callback("Dr Pepper", "Dr Pepper", Math.random() > 0.5),
    // Markup.button.callback("Pepsi", "Pepsi"),
  ])
  }
}