import React from "react";
import { Carousel } from "antd";
import TitleBox from "@/components/titleBox";
import Chart1 from "./chart1";

const LeftTopRight = () => {
  const afterChange = (num) => {
    // console.log("🚀 ~ afterChange ~ num:", num);
  };
  return (
    <>
      <TitleBox title="质量" desc="活性度"></TitleBox>
      <Carousel
        autoplay={true}
        dots={false}
        autoplaySpeed={10000}
        afterChange={afterChange}
      >
        <Chart1 />
      </Carousel>
    </>
  );
};
export default LeftTopRight;
