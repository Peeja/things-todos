#!/usr/local/bin/node

// require("dotenv").config();

const formatDataForGoogleCharts = require("./formatDataForGoogleCharts");

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const path = require("path");
// const level = require("level");
const cheerio = require("cheerio");
const execFile = Promise.promisify(require("child_process").execFile);

const filePath = path.join(__dirname, "chart.html");

Promise.all([
  fs.readFileAsync(filePath, { encoding: "utf-8" }),
  execFile("osascript", [
    "-l",
    "JavaScript",
    path.join(__dirname, "taskData.js")
  ])
    .then(JSON.parse)
    .then(formatDataForGoogleCharts)
]).then(([html, data]) => {
  const $ = cheerio.load(html);
  $("#data").html(`window.data = ${JSON.stringify(data)}`);
  process.stdout.write($.html());
});
