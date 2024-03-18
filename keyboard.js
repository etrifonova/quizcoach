const { Markup } = require("telegraf");

function getMenu() {
  return Markup.keyboard([
    ["❓ /question", "☝️ /answer"], // Row1 with 2 buttons
    // ["☸ Литература", "📞 Бренды"], 
    // ["📢 Спорт", "⭐️ Музыка", "👥 Кинематограф"], 
  ])
    .oneTime()
    .resize()
}

module.exports = getMenu;