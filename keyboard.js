const { Markup } = require("telegraf");

function getMenu() {
  return Markup.keyboard([
    ["🔍 География", "😎 История"], // Row1 with 2 buttons
    // ["☸ Литература", "📞 Бренды"], 
    // ["📢 Спорт", "⭐️ Музыка", "👥 Кинематограф"], 
  ])
    .oneTime()
    .resize()
}

module.exports = getMenu;