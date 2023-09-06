import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

import solidGauge from "highcharts/modules/solid-gauge";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";

// Initialize Highcharts modules
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  highchartsMore(Highcharts);
  solidGauge(Highcharts);
}

const SolidGaugeChart2 = ({ value }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      chart: {
        type: "solidgauge",
        height: "300px", // Adjust the height as needed

        backgroundColor: "transparent",
      },
      title: {
        text: "Crowd Capacity",
        style: {
          color: "red",
          fontWeight: 700,
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
        },
      },
      pane: {
        startAngle: -135,
        endAngle: 135,
        background: {
          backgroundColor: "white", // Set the background to transparent
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },
      yAxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            color: "red", // Set the color of the numbers on the gauge (change 'blue' to your desired color)
            fontWeight: 700,
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          },
        },
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 0,
            borderWidth: 0,
            useHTML: true,
            style: { color: "red" },
          },
        },
      },
      series: [
        {
          name: "Gauge",
          data: [value],
          tooltip: {
            valueSuffix: " %",
          },
          style: { color: "red" },
        },
      ],
    };
    /* @ts-ignore */
    if (!chartRef.current) {
      /* @ts-ignore */

      chartRef.current = Highcharts.chart("2", chartOptions);
    } else {
      chartRef.current?.series[0].setData([value], true);
      chartRef.current.series[0].update({
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:25px;color:' +
            (value < 50 ? (value === 0 ? "white" : "blue") : "red") +
            '">' +
            value +
            '</span><br/><span style="font-size:12px;color:silver">% Full</span></div>',
        },
      });
    }

    //Highcharts.chart("solidGaugeContainer", chartOptions);
  }, [value]);

  return <div id="2"></div>;
};

export default SolidGaugeChart2;
