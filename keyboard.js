const { Markup } = require("telegraf");

function getMenu() {
  return Markup.keyboard([
    ["/question", "/answer"],
  ])
    .oneTime()
    .resize()
}

module.exports = getMenu;