const formatDataForGoogleCharts = require("./formatDataForGoogleCharts");

describe("formatDataForGoogleCharts", () => {
  it("formats data for Google Charts", () => {
    data = [
      [
        1517265574715,
        [
          ["2017-11-10T05:00:00.000Z", 91],
          ["2017-11-14T05:00:00.000Z", 68],
          ["2017-11-16T05:00:00.000Z", 39],
          ["2017-11-17T05:00:00.000Z", 147],
          ["2017-11-20T05:00:00.000Z", 42],
          ["2017-11-22T05:00:00.000Z", 67],
          ["2017-11-23T05:00:00.000Z", 89],
          ["2017-11-28T05:00:00.000Z", 67],
          ["2017-11-30T05:00:00.000Z", 142],
          ["2017-12-04T05:00:00.000Z", 45],
          ["2017-12-05T05:00:00.000Z", 124]
        ]
      ],
      [
        1517265644789,
        [
          ["2017-11-28T05:00:00.000Z", 67],
          ["2017-11-30T05:00:00.000Z", 142],
          ["2017-12-04T05:00:00.000Z", 45],
          ["2017-12-05T05:00:00.000Z", 124],
          ["2017-12-07T05:00:00.000Z", 33],
          ["2017-12-09T05:00:00.000Z", 24],
          ["2017-12-11T05:00:00.000Z", 75],
          ["2017-12-15T05:00:00.000Z", 18],
          ["2017-12-18T05:00:00.000Z", 47]
        ]
      ],
      [
        1517265654061,
        [
          ["2017-12-11T05:00:00.000Z", 75],
          ["2017-12-15T05:00:00.000Z", 18],
          ["2017-12-18T05:00:00.000Z", 47],
          ["2017-12-19T05:00:00.000Z", 78],
          ["2017-12-20T05:00:00.000Z", 64],
          ["2017-12-21T05:00:00.000Z", 83],
          ["2017-12-22T05:00:00.000Z", 25],
          ["2017-12-25T05:00:00.000Z", 74],
          ["2017-12-26T05:00:00.000Z", 9],
          ["2017-12-30T05:00:00.000Z", 14]
        ]
      ]
    ];

    expect(
      formatDataForGoogleCharts(data, new Date("2018-02-03T18:53:50.082Z"))
    ).toMatchObject({
      rows: [
        [
          { label: "Date", type: "date" },
          { label: "35 days old", type: "number" },
          { label: "39 days old", type: "number" },
          { label: "40 days old", type: "number" },
          { label: "43 days old", type: "number" },
          { label: "44 days old", type: "number" },
          { label: "45 days old", type: "number" },
          { label: "46 days old", type: "number" },
          { label: "47 days old", type: "number" },
          { label: "50 days old", type: "number" },
          { label: "54 days old", type: "number" },
          { label: "56 days old", type: "number" },
          { label: "58 days old", type: "number" },
          { label: "60 days old", type: "number" },
          { label: "61 days old", type: "number" },
          { label: "65 days old", type: "number" },
          { label: "67 days old", type: "number" },
          { label: "72 days old", type: "number" },
          { label: "73 days old", type: "number" },
          { label: "75 days old", type: "number" },
          { label: "78 days old", type: "number" },
          { label: "79 days old", type: "number" },
          { label: "81 days old", type: "number" },
          { label: "85 days old", type: "number" }
        ],
        [
          1517265574715,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          124,
          45,
          142,
          67,
          89,
          67,
          42,
          147,
          39,
          68,
          91
        ],
        [
          1517265644789,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          47,
          18,
          75,
          24,
          33,
          124,
          45,
          142,
          67,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          1517265654061,
          14,
          9,
          74,
          25,
          83,
          64,
          78,
          47,
          18,
          75,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ],
      series: [
        { color: "#00BFFF", lineWidth: 0, visibleInLegend: false },
        { color: "#008CFF", lineWidth: 0, visibleInLegend: false },
        { color: "#007FFF", lineWidth: 1, visibleInLegend: true },
        { color: "#0059FF", lineWidth: 0, visibleInLegend: false },
        { color: "#004CFF", lineWidth: 0, visibleInLegend: false },
        { color: "#0040FF", lineWidth: 0, visibleInLegend: false },
        { color: "#0033FF", lineWidth: 0, visibleInLegend: false },
        { color: "#0026FF", lineWidth: 1, visibleInLegend: true },
        { color: "#0000FF", lineWidth: 0, visibleInLegend: false },
        { color: "#3300FF", lineWidth: 0, visibleInLegend: false },
        { color: "#4D00FF", lineWidth: 0, visibleInLegend: false },
        { color: "#6600FF", lineWidth: 0, visibleInLegend: false },
        { color: "#7F00FF", lineWidth: 1, visibleInLegend: true },
        { color: "#8C00FF", lineWidth: 0, visibleInLegend: false },
        { color: "#BF00FF", lineWidth: 0, visibleInLegend: false },
        { color: "#D900FF", lineWidth: 0, visibleInLegend: false },
        { color: "#FF00E6", lineWidth: 0, visibleInLegend: false },
        { color: "#FF00D9", lineWidth: 1, visibleInLegend: true },
        { color: "#FF00BF", lineWidth: 0, visibleInLegend: false },
        { color: "#FF0099", lineWidth: 0, visibleInLegend: false },
        { color: "#FF008C", lineWidth: 0, visibleInLegend: false },
        { color: "#FF0073", lineWidth: 0, visibleInLegend: false },
        { color: "#FF0040", lineWidth: 1, visibleInLegend: true }
      ]
    });
  });
});
