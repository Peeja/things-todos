const R = require("ramda");
const moment = require("moment");
const Color = require("color");

const daysAgo = (d, now) => moment(now).diff(d, "days");
const daysOldToColor = days => Color({ h: days * 3 + 90, s: 100, l: 50 }).hex();

// An experiment in providing a functional let in JS:
const let_ = (bindings, body) => body(bindings);

module.exports = (data, now) => {
  const cohortDates = R.pipe(
    R.chain(([timestamp, values]) => values),
    R.map(([date, _minutes]) => date),
    R.sortBy(d => new Date(d)),
    R.reverse,
    R.uniq
  )(data);

  return {
    rows: [
      R.prepend(
        { label: "Date", type: "date" },
        R.map(date => ({
          label: `${daysAgo(date, now)} days old`,
          type: "number"
        }))(cohortDates)
      ),
      ...R.map(([timestamp, values]) =>
        R.pipe(
          R.fromPairs,
          R.props(cohortDates),
          R.map(v => v || 0),
          R.map(v => v),
          R.prepend(timestamp)
        )(values)
      )(data)
    ],
    series: R.pipe(
      R.reverse,
      R.addIndex(R.map)((d, idx) => [d, idx]),
      R.reverse,
      R.map(([d, idx]) =>
        let_({ majorTick: idx % 5 === 0 }, ({ majorTick }) => ({
          color: daysOldToColor(daysAgo(d)),
          visibleInLegend: majorTick,
          lineWidth: majorTick ? 1 : 0
        }))
      )
    )(cohortDates)
  };
};
