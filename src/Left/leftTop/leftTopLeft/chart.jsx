import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
const Chart = ({ data }) => {
  const getName = useMemo(() => {
    if (data?.name === "产能") {
      return "吨/天";
    } else if (data?.name === "吨灰成本") {
      return "元/吨";
    } else if (data?.name === "工序能耗") {
      return "";
    } else if (data?.name === "转煤有量") {
      return "m3";
    } else if (data?.name === "混煤有量") {
      return "m3";
    } else if (data?.name === "煤气成本") {
      return "元";
    } else if (data?.name === "电耗") {
      return "℃";
    }
  }, [data]);
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
      },
    },
    yAxis: {
      name: getName,
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
        data: data?.data[0]?.data,
        z: 10,
      },
      {
        name: data?.data[1]?.name,
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
        data: data?.data[1]?.data,
        z: 10,
      },
      {
        name: data?.data[2]?.name,
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
        data: data?.data[2]?.data,
        z: 10,
      },
      {
        name: data?.data[3]?.name,
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
        data: data?.data[3]?.data,
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
export default Chart;
