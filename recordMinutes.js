const fetchOvercastHTML = require("./fetchOvercastHTML");
const timeInMinutes = require("./timeInMinutes");

module.exports = db =>
  fetchOvercastHTML(process.env.COOKIE)
    .then(timeInMinutes)
    .then(mins => db.put(new Date().getTime(), mins));
