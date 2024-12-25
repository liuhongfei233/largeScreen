import React from "react";
import Left from "../Left";
import Center from "../Center";
import Right from "../Right";
import Adaptive from "@/Adaptive/adaptive";
import "./index.scss";
const Index = () => {
  return (
    <Adaptive>
      <Left isShow={false} />
      <Center isShow={false} />
      <Right isShow={false} />
    </Adaptive>
  );
};

export default Index;
