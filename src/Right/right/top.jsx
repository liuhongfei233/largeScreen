import React from "react";
import TitleBox from "../../components/titleBox";
import ScrollTable from "@/components/scrollTable";
import "../index.scss";

const Index = () => {
  const dataSource = [
    {
      key: 1,
      name: "1#温度器",
      content: "温度传感器故障报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 2,
      name: "2#温度器",
      content: "温度传感器温度过高报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 3,
      name: "3#温度器",
      content: "温度传感器故障报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 4,
      name: "4#温度器",
      content: "温度传感器温度过高报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 5,
      name: "5#温度器",
      content: "温度传感器故障报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 6,
      name: "6#温度器",
      content: "温度传感器温度过高报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 7,
      name: "7#温度器",
      content: "温度传感器故障报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 8,
      name: "8#温度器",
      content: "温度传感器温度过高报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 9,
      name: "9#温度器",
      content: "温度传感器故障报警",
      time: "2021-01-01 10:00:34",
    },
    {
      key: 10,
      name: "10#温度器",
      content: "温度传感器温度过高报警",
      time: "2021-01-01 10:00:34",
    },
  ];
  return (
    <div className="right_content_right_top">
      <TitleBox
        title="预警数据"
        icon={
          <img
            width={52}
            height={52}
            style={{ marginLeft: 30 }}
            src={require("@/assets/warning.png")}
            alt=""
          />
        }
      ></TitleBox>
      <div style={{ height: 760 }}>
        <ScrollTable dataSource={dataSource} />
      </div>
    </div>
  );
};
export default Index;
