#!/usr/local/bin/node

const recordTodos = require("./recordTodos");
const formatDataForGoogleCharts = require("./formatDataForGoogleCharts");

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const path = require("path");
const level = require("level");
const cheerio = require("cheerio");

const db = level(`${process.env.HOME}/.things-todos.db`, {
  keyEncoding: "json",
  valueEncoding: "json"
});

const filePath = path.join(__dirname, "chart.html");

const readAllData = db =>
  new Promise((resolve, reject) => {
    const data = [];
    db
      .createReadStream()
      .on("data", v => {
        data.push(v);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", err => {
        reject(err);
      });
  });

Promise.all([
  fs.readFileAsync(filePath, { encoding: "utf-8" }),
  recordTodos(db)
    .then(() => readAllData(db))
    .tap(() => db.close())
    .then(vs => vs.map(({ key, value }) => [key, value]))
    .then(formatDataForGoogleCharts)
]).then(([html, data]) => {
  const $ = cheerio.load(html);
  $("#data").html(`window.data = ${JSON.stringify(data)}`);
  process.stdout.write($.html());
});
