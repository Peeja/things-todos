require("dotenv").config();

var level = require("level");
var db = level("./db");

const fetchOvercastHTML = require("./fetchOvercastHTML");
const timeInMinutes = require("./timeInMinutes");

module.exports = () =>
  fetchOvercastHTML(process.env.COOKIE)
    .then(timeInMinutes)
    .then(mins => db.put(new Date(), mins));
