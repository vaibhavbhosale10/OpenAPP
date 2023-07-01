import React, { useRef, useEffect } from "react";
import Chart from "react-google-charts";
import "./secondfetch.css";
import Container from "react-bootstrap/Container";

const GraphLayout = () => {
  const chartWrapperRef = useRef(null);

  useEffect(() => {
    const resizeListener = () => {
      if (chartWrapperRef.current && chartWrapperRef.current.chartWrapper) {
        chartWrapperRef.current.chartWrapper.draw();
      }
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const LineDatatwo = [
    ["x", "Deposits", "withdrawals", "Currency Exchange"],
    [0, 0, 0, 4],
    [1, 10, 5, 6],
    [2, 12, 8, 8],
    [3, 17, 9, 10],
    [4, 18, 10, 12],
    [5, 9, 12, 7],
    [6, 14, 14, 5],
    [7, 15, 16, 21],
    [8, 19, 18, 24],
    [9, 22, 22, 26],
  ];
  const LineChartOptions = {
    hAxis: {
      title: "Time",
    },
    vAxis: {
      title: "Popularity",
    },
    series: {
      1: { curveType: "function" },
    },
  };
  return (
    <Container
      fluid
      ref={chartWrapperRef}
      style={{ width: "100%", height: "100%" }}
      className="chart"
    >
      <Chart
        style={{ justifyContent: "center", borderRadius: "20px" }}
        width={"1000px"}
        height={"359px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={LineDatatwo}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
      />
    </Container>
  );
};

export default GraphLayout;
