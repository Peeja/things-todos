const $ = require("cheerio");
const R = require("ramda");

module.exports = html =>
  R.pipe(
    R.map(e =>
      $(e)
        .text()
        .match(/(\w\w\w \d+, \d\d\d\d) • (\d+) min/)
    ),
    R.filter(R.identity),
    R.groupBy(m => m[1]),
    R.toPairs,
    R.map(
      R.pipe(
        R.over(R.lensIndex(0), dateString => new Date(dateString)),
        R.over(
          R.lensIndex(1),
          R.pipe(R.map(m => m[2]), R.map(Number.parseInt), R.sum)
        )
      )
    )
  )($(".episodecell .titlestack > :last-child", html).toArray());
