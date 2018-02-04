const path = require("path");
const R = require("ramda");
const moment = require("moment");
const Promise = require("bluebird");
const execFile = Promise.promisify(require("child_process").execFile);

// Like R.countBy, but produces a Map. f(x) may be any value, not only a string.
const countByToMap = f =>
  R.reduce((map, x) => map.set(f(x), (map.get(f(x)) | 0) + 1), new Map());

module.exports = db =>
  execFile("osascript", [
    "-l",
    "JavaScript",
    path.join(__dirname, "taskData.js")
  ])
    .then(JSON.parse)
    .then(
      countByToMap(d =>
        moment(d)
          .startOf("day")
          .valueOf()
      )
    )
    .then(Array.from)
    .then(countByCreationDate =>
      db.put(new Date().getTime(), countByCreationDate)
    );
