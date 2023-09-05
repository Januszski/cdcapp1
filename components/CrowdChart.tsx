import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts";

const generateRandomDataPoint = () => Math.random() * 100; // Function to generate random data point

const CrowdChart = () => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  /* @ts-ignore */

  useEffect(() => {
    // Function to update data every second
    const updateData = () => {
      /* @ts-ignore */
      setData((prevData) => [
        ...prevData.slice(1), // Remove the first data point
        generateRandomDataPoint(), // Add a new random data point
      ]);
      setCounter((prevCounter) => prevCounter + 1);
    };

    const interval = setInterval(updateData, 1000); // Update data every second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const config = {
    chart: {
      type: "spline", // Line chart for time series
    },
    title: {
      text: "Time Series Chart",
    },
    xAxis: {
      type: "datetime", // X-axis type for time-based data
      tickPixelInterval: 150,
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Random Data",
        data: data.map((value, index) => ({
          x: new Date().getTime() - (counter - index) * 1000, // Time in milliseconds
          y: value,
        })),
      },
    ],
  };

  return (
    <div>
      {/* @ts-ignore */}
      <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
  );
};

export default CrowdChart;
