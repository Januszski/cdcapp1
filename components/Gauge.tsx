import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

// Initialize Highcharts modules
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const SolidGaugeChart = ({ value }) => {
  useEffect(() => {
    const chartOptions = {
      chart: {
        type: "solidgauge",
        height: "300px", // Adjust the height as needed

        backgroundColor: "transparent",
      },
      title: {
        text: "Noise Level",
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

    Highcharts.chart("solidGaugeContainer", chartOptions);
  }, [value]);

  return <div id="solidGaugeContainer"></div>;
};

export default SolidGaugeChart;
