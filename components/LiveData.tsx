import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import solidGauge from "highcharts/modules/solid-gauge";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";

// if (typeof Highcharts === "object") {
//   HighchartsExporting(Highcharts);
// }

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  highchartsMore(Highcharts);
  solidGauge(Highcharts);
}

const options = {
  chart: {
    type: "solidgauge",
    reflow: false,
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const Spline = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Spline;
