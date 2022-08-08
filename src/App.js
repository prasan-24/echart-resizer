import React from "react";
import ReactEcharts from "echarts-for-react";
import { Rnd } from "react-rnd";
import "./App.css";

function App() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return (
    <div
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 500,
          height: 190,
        }}
        minWidth={500}
        minHeight={190}
        bounds="window"
      >
        <div style={{backgroundColor:'white', margin: 0}}>
          <ReactEcharts option={option} />
        </div>
      </Rnd>
    </div>
  );
}

export default App;
