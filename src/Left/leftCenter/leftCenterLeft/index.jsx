import React, { useContext } from "react";
import TitleBox from "@/components/titleBox";
import { GlobalContext } from "@/components/globalContext";
import Chart from "./chart";
const Index = () => {
  const { state } = useContext(GlobalContext);
  const report = state?.report || [];

  return (
    <>
      <TitleBox title={report[2]?.label} />
      {report[2]?.data?.length && <Chart data={report[2]} />}
    </>
  );
};
export default Index;
