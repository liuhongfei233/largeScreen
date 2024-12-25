import React from "react";
import { Carousel } from "antd";
import TitleBox from "@/components/titleBox";
import Chart1 from "./chart1";
import Chart2 from "./chart2";

const Index = () => {
  const afterChange = (num) => {
    // console.log("🚀 ~ afterChange ~ num:", num);
  };
  return (
    <>
      <TitleBox title="成本" desc="月累计"></TitleBox>
      <Carousel
        autoplay={true}
        dots={false}
        autoplaySpeed={5000}
        afterChange={afterChange}
      >
        <Chart1 />
        <Chart2 />
      </Carousel>
    </>
  );
};
export default Index;
