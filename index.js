require("dotenv").config();

const fetchOvercastHTML = require("./fetchOvercastHTML");
const timeInMinutes = require("./timeInMinutes");

module.exports = () =>
  fetchOvercastHTML(process.env.COOKIE).then(timeInMinutes);
