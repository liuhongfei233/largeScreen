import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
const Chart = ({ data }) => {
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
      data: data?.date,
      axisTick: { show: false },
      axisLabel: {
        color: "#E0E0E0",
        fontSize: 20,
        interval: 0, // 显示所有标签
      },
    },
    yAxis: {
      min: data?.name === "活性度" ? 250 : 60,
      max: data?.name === "活性度" ? 450 : 100,
      name: data?.name === "活性度" ? "ML" : "%",
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
        name: data?.data[0]?.name,
        data: data?.data[0]?.data,
        type: "line",
        smooth: true,
      },
      {
        name: data?.data[1]?.name,
        data: data?.data[1]?.data,
        type: "line",
        smooth: true,
      },
      {
        name: data?.data[2]?.name,
        data: data?.data[2]?.data,
        type: "line",
        smooth: true,
      },
      {
        name: data?.data[3]?.name,
        data: data?.data[3]?.data,
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
export default Chart;
