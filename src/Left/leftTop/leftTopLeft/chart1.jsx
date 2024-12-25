import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
const Chart1 = () => {
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
      name: "T/D",
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
        type: "pictorialBar",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00BFC6", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(0,191,198,0)", // 100% 处的颜色
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [83, 60, 25, 18, 12],
        z: 10,
      },
      {
        name: "2#窑",
        type: "pictorialBar",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#F0B14F", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(240,174,79,0)", // 100% 处的颜色
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [50, 20, 15, 8, 2],
        z: 10,
      },
      {
        name: "3#窑",
        type: "pictorialBar",
        barGap: "-60%",
        barCategoryGap: "20%",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#04C3FE", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(122,202,234,0)", // 100% 处的颜色
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [30, 20, 15, 8, 2],
        z: 10,
      },
      {
        name: "4#窑",
        type: "pictorialBar",
        barGap: "-60%",
        barCategoryGap: "20%",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#1160FE", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(74,86,164,0)", // 100% 处的颜色
              },
            ],
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [30, 20, 15, 8, 2],
        z: 10,
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
export default Chart1;
