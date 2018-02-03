const R = require("ramda");
const moment = require("moment");
const Color = require("color");

const daysAgo = (d, now) => moment(now).diff(d, "days");
const daysOldToColor = days => Color({ h: days * 3 + 90, s: 100, l: 50 }).hex();

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
      R.addIndex(R.map)((date, index) => ({
        date,
        majorTick: index % 5 === 0
      })),
      R.reverse,
      R.map(({ date, majorTick }) => ({
        color: daysOldToColor(daysAgo(date)),
        visibleInLegend: majorTick,
        lineWidth: majorTick ? 1 : 0
      }))
    )(cohortDates)
  };
};
