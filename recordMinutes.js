const fetchOvercastHTML = require("./fetchOvercastHTML");
const timesInMinutes = require("./timesInMinutes");

module.exports = db =>
  fetchOvercastHTML(process.env.COOKIE)
    .then(timesInMinutes)
    .then(times => db.put(new Date().getTime(), times));
