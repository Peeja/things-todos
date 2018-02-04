const R = require("ramda");
const moment = require("moment");
const Color = require("color");

const daysAgo = (d, now) => moment(now).diff(d, "days");
// const daysOldToColor = days => Color({ h: days * 2 + 90, s: 100, l: 50 }).hex();
const daysOldToColor = days => Color({ h: 0, s: 100, l: Math.max(50, 80 - (0.3 * days)) }).hex();

module.exports = (data, now) => {
  const countByCohortDate = R.countBy(d =>
    moment(d)
      .startOf("day")
      .valueOf()
  )(data);

  const cohortDates = R.pipe(
    R.keys,
    R.map(Number.parseInt),
    R.sortBy(R.identity),
    R.reverse
  )(countByCohortDate);

  return {
    rows: [
      R.prepend(
        { label: "Date", type: "date" },
        R.map(date => ({
          label: `${daysAgo(date, now)} days old`,
          type: "number"
        }))(cohortDates)
      ),
      [new Date(), ...R.props(cohortDates, countByCohortDate)],
      [new Date(1), ...R.props(cohortDates, countByCohortDate)]
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
