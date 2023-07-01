import React from "react";
import { Chart } from "react-google-charts";
const PieChart = () => {
  const chartData = [
    ["Task", "Hours per Day"],
    ["Basic Tees", 11],
    ["Shorts", 2],
    ["Super hoodies", 7],
  ];

  {
    return (
      <div>
        <Chart
          style={{ backgroundColor: "#f5f5f5" }}
          chartType="PieChart"
          data={chartData}
          width="480px"
          height="256px"
          options={{
            title: "Top products",

            titleTextStyle: {
              fontSize: 25,
              bold: true,
              italic: false,
            },
            pieHole: 0.4,
            is3D: false,
          }}
        />
      </div>
    );
  }
};
export default PieChart;
