import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
const Chart2 = () => {
  const chartRef = useRef(null);
  const option = {
    legend: {
      left: "right",
      icon: "rect",
      itemWidth: 10,
      itemHeight: 6,
      itemGap: 30,
      textStyle: {
        color: "#E0E0E0",
        fontSize: 20,
      },
      padding: [20, 10, 0, 0],
    },
    grid: {
      left: "3%", //默认10%
      right: "4%", //默认10%
      bottom: "3%", //默认60
      top: "18%",
      containLabel: true,
      //grid区域是否包含坐标轴的刻度标签
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    xAxis: {
      data: ["12月1日", "12月2日", "12月3日"],
      axisTick: { show: false },
      axisLabel: {
        color: "#E0E0E0",
        fontSize: 20,
      },
    },
    yAxis: {
      name: "ML",
      nameTextStyle: {
        fontSize: 16,
        color: "#fff",
        padding: [0, 45, 10, 0],
      },
      type: "value",
      axisLabel: {
        color: "#E0E0E0",
        fontSize: 20,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(255,255,255,0.16)",
        },
      },
    },
    series: [
      {
        name: "1#窑",
        data: [900, 200, 1000, 1500, 1700, 1900, 2000],
        type: "line",
        smooth: true,
      },
      {
        name: "2#窑",
        data: [800, 900, 800, 900, 1000, 1100, 1100],
        type: "line",
        smooth: true,
      },
      {
        name: "3#窑",
        data: [1000, 400, 300, 500, 600, 100, 100],
        type: "line",
        smooth: true,
      },
      {
        name: "4#窑",
        data: [200, 600, 500, 400, 1500, 600, 1800],
        type: "line",
        smooth: true,
      },
    ],
  };
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    // 添加窗口大小变化监听器
    window.addEventListener("resize", () => {
      if (myChart) {
        myChart.resize();
      }
    });
    // 清理函数
    return () => {
      if (myChart) {
        myChart.dispose();
      }
      window.removeEventListener("resize", () => {
        if (myChart) {
          myChart.resize();
        }
      });
    };
  }, []);
  return <div ref={chartRef} className="chartContainer"></div>;
};
export default Chart2;
