import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "@/index.scss";
import { line } from "@jiaminghi/data-view-react/lib/index-fcdce9c7";
const Chart2 = () => {
  const chartRef = useRef(null);
  const option = {
    legend: {
      orient: "vertical",
      left: 21,
      top: "center",
      icon: "rect",
      itemWidth: 10,
      itemHeight: 6,
      itemGap: 18,
      textStyle: {
        color: "#E0E0E0",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["60%", "70%"], // 通过设置内径与外径将饼图变为圆环饼图
        left: 63,
        emphasis: {
          // 设置高亮时显示标签
          label: {
            show: true,
          },
          scale: true, // 设置高亮时放大图形
          // scaleSize: 20
        },
        padAngle: 1,
        label: {
          // 设置图形标签样式
          show: false, // 未高亮时不显示标签，否则高亮时显示的标签会与静态的标签重叠
          position: "center",
          // 设置标签展示内容,其中{d}、{b}为echarts标签内容格式器
          formatter: "{c_style|{c}}{per_style|单位}\n{b_style|{b}(11月)}",
          // 为标签内容指定样式，只能设置series-pie.label支持的样式
          rich: {
            c_style: {
              fontSize: 42,
              padding: 10,
              fontStyle: "normal",
              fontFamily: "PingFangSC, PingFang SC",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 63,
              fontStyle: "normal",
              textTransform: "none",
            },
            per_style: {
              fontSize: 13,
              fontStyle: "normal",
              fontFamily: "PingFangSC, PingFang SC",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 14,
              fontStyle: "normal",
              textTransform: "none",
              opacity: 0.63,
            },
            b_style: {
              fontSize: 20,
              fontStyle: "normal",
              fontFamily: "PingFangSC, PingFang SC",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 22,
              fontStyle: "normal",
              textTransform: "none",
              opacity: 0.77,
            },
          },
        },
        data: [
          // 饼图数据
          { value: 1048, name: "1#窑" },
          { value: 735, name: "2#窑" },
          { value: 580, name: "3#窑" },
          { value: 484, name: "4#窑" },
        ],
      },
      {
        name: "Access From",
        type: "pie",
        radius: ["56%", "58%"], // 通过设置内径与外径将饼图变为圆环饼图
        left: 63,
        padAngle: 1,
        label: {
          // 设置图形标签样式
          show: false, // 未高亮时不显示标签，否则高亮时显示的标签会与静态的标签重叠
        },
        itemStyle: { color: "#979797", opacity: 0.3 },
        data: [
          // 饼图数据
          { value: 1048, name: "1#窑" },
          { value: 735, name: "2#窑" },
          { value: 580, name: "3#窑" },
          { value: 484, name: "4#窑" },
        ],
      },
      {
        name: "Access From",
        type: "pie",
        radius: ["75%", "77%"], // 通过设置内径与外径将饼图变为圆环饼图
        left: 63,
        padAngle: 1,
        label: {
          // 设置图形标签样式
          show: false, // 未高亮时不显示标签，否则高亮时显示的标签会与静态的标签重叠
        },
        itemStyle: { color: "#797979", opacity: 0.36 },
        data: [
          // 饼图数据
          { value: 1048, name: "1#窑" },
          { value: 735, name: "2#窑" },
          { value: 580, name: "3#窑" },
          { value: 484, name: "4#窑" },
        ],
      },
    ],
  };

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    //自动轮播方法
    // 自动轮播的函数
    let currentIndex = -1; // 当前高亮图形在饼图数据中的下标
    let changePieInterval = setInterval(selectPie, 1000); // 设置自动切换高亮图形的定时器

    function highlightPie() {
      // 取消所有高亮并高亮当前图形
      // 遍历饼图数据，取消所有图形的高亮效果
      for (var idx in option.series[0].data)
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: idx,
        });
      // 高亮当前图形
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }

    myChart.on("mouseover", (params) => {
      // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
      if (changePieInterval) clearInterval(changePieInterval);
      currentIndex = params.dataIndex;
      highlightPie();
    });

    myChart.on("mouseout", (params) => {
      // 用户鼠标移出时，重新开始自动切换
      if (changePieInterval) clearInterval(changePieInterval);
      changePieInterval = setInterval(selectPie, 1000);
    });

    function selectPie() {
      // 高亮效果切换到下一个图形
      var dataLen = option.series[0].data.length;
      currentIndex = (currentIndex + 1) % dataLen;
      highlightPie();
    }
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
