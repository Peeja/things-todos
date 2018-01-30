const R = require("ramda");

module.exports = data => {
  const cohortDates = R.pipe(
    R.chain(([timestamp, values]) => values),
    R.map(([date, _minutes]) => date),
    R.uniq
  )(data);

  return [
    R.prepend(
      { label: "Date", type: "date" },
      R.map(date => ({ label: date, type: "number" }))(cohortDates)
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
  ];
};
