const { Markup } = require("telegraf");

function getMenu() {
  return Markup.keyboard([
    ["/question", "/answer", "wft"], // Row1 with 2 buttons
  ])
    .oneTime()
    .resize()
}

module.exports = getMenu;