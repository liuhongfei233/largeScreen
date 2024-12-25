import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
const Chart2 = () => {
  const chartRef = useRef(null);
  const option = {
    legend: {
      left: "right",
      itemGap: 20,
      icon: "rect",
      itemWidth: 10,
      itemHeight: 5,
      padding: [20, 10, 0, 0],
      textStyle: {
        color: "#fff",
      },
      itemStyle: {
        borderType: "none",
        // color: "transparent",
      },
      // icon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
      //   formatter: function (name) {
      //     return 'Legend ' + name;
      // }
    },
    grid: {
      left: "3%", //默认10%
      right: "4%", //默认10%
      bottom: "2%", //默认60
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
      data: ["驯鹿", "火箭", "飞机", "高铁", "轮船"],
      axisTick: { show: false },
      axisLabel: {
        color: "#e54035",
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#ccc",
        },
      },
    },
    series: [
      {
        color: "green",
        name: "hill",
        type: "pictorialBar",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          //   opacity: 0.5,
        },
        emphasis: {
          focus: "series",
        },
        data: [83, 60, 25, 18, 12],
        z: 10,
      },
      {
        color: "orange",
        name: "123",
        type: "pictorialBar",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          //   opacity: 0.6,
        },
        emphasis: {
          focus: "series",
        },
        data: [50, 20, 15, 8, 2],
        z: 10,
      },
      {
        color: "blue",
        name: "1234",
        type: "pictorialBar",
        barGap: "-60%",
        barCategoryGap: "20%",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          //   opacity: 0.6,
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
export default Chart2;
