import React, { useContext, useState } from "react";
import { Carousel } from "antd";
import TitleBox from "@/components/titleBox";
import { GlobalContext } from "@/components/globalContext";
import Chart from "./chart";

const Index = () => {
  const { state } = useContext(GlobalContext);
  const report = state?.report || [];
  const [num, setNum] = useState(0);
  const afterChange = (index) => {
    setNum(index);
  };
  return (
    <>
      <TitleBox
        title={report[3]?.label}
        desc={report[3]?.data && report[3]?.data[num]?.name}
      />
      <Carousel
        autoplay={true}
        dots={false}
        autoplaySpeed={20000}
        afterChange={afterChange}
      >
        {report[3]?.data?.map((item, index) => {
          return <Chart key={index} data={item} />;
        })}
      </Carousel>
    </>
  );
};
export default Index;
