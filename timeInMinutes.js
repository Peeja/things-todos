const $ = require("cheerio");

module.exports = html =>
  $(".episodecell .titlestack > :last-child", html)
    .toArray()
    .map(e =>
      $(e)
        .text()
        .match(/• (\d+) min/)
    )
    .map(v => (v ? Number.parseInt(v[1]) : 0), 0)
    .reduce((a, b) => a + b, 0);
