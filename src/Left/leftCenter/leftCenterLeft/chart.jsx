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
      width: 332,
      itemGap: 10,
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
      top: "25%",
      containLabel: true,
      //grid区域是否包含坐标轴的刻度标签
    },
    xAxis: {
      type: "category",
      data: data?.date,
      axisTick: { show: false },
      axisLabel: {
        color: "#E0E0E0",
        fontSize: 20,
      },
    },
    yAxis: {
      name: "吨",
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
        type: "bar",
        data: data?.data[0]?.data,
        stack: "1",
        barWidth: 16,
        itemStyle: {
          borderWidth: 2,
          borderColor: "transparent",
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#F0AE4F", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(240,174,79,0)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "1",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
      {
        name: data?.data[1]?.name,
        type: "bar",
        data: data?.data[1]?.data,
        barWidth: 14,
        stack: "1",
        itemStyle: {
          color: "transparent",
          borderColor: "#F0AE4F",
          borderWidth: 1,
        },
        barGap: "120%",
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "1",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
      {
        name: data?.data[2]?.name,
        type: "bar",
        data: data?.data[2]?.data,
        stack: "2",
        barWidth: 16,
        itemStyle: {
          borderWidth: 2,
          borderColor: "transparent",
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00BEFE", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(0,190,254,0)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "2",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
      {
        name: data?.data[3]?.name,
        type: "bar",
        data: data?.data[3]?.data,
        // barMaxWidth: 14,
        stack: "2",
        itemStyle: {
          color: "transparent",
          borderColor: "#4CC2EB",
          borderWidth: 1,
        },
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "2",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
      {
        name: data?.data[4]?.name,
        type: "bar",
        data: data?.data[4]?.data,
        stack: "3",
        barWidth: 16,
        itemStyle: {
          borderWidth: 2,
          borderColor: "transparent",
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#4D63F1", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(77,99,241,0)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "3",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
      {
        name: data?.data[5]?.name,
        type: "bar",
        data: data?.data[5]?.data,
        // barMaxWidth: 16,
        stack: "3",
        itemStyle: {
          color: "transparent",
          borderColor: "#4D63F1",
          borderWidth: 1,
        },
      },
      // {
      //   type: "bar",
      //   data: [6, 6, 6],
      //   stack: "3",
      //   itemStyle: {
      //     borderRadius: 1,
      //     color: "#fff",
      //   },
      // },
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
