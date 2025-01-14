import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import TitleBox from "@/components/titleBox";
import Cameras from "./cameras";
import Cameras2 from "./cameras2";
import "../../index.scss";
const Index = () => {
  const [current, setCurrent] = useState(0);
  const List = [
    { key: 1, cameras: <Cameras /> },
    { key: 2, cameras: <Cameras2 /> },
  ];
  useEffect(() => {
    return;
    const timer = setInterval(() => {
      let num = current;
      if (current == List.length - 1) {
        setCurrent(0);
      } else {
        num++;
        setCurrent(num);
      }
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [current]);
  return (
    <>
      <TitleBox
        title="监控视频"
        icon={
          <img
            width={52}
            height={52}
            style={{ marginLeft: 30 }}
            src={require("@/assets/camera.png")}
            alt=""
          />
        }
      ></TitleBox>
      <div className="right_bottom_container">
        {/* <CSSTransition
          unmountOnExit
          in={current == 0}
          timeout={500}
          classNames="fade"
        > */}
        <Cameras />
        {/* </CSSTransition> */}
        {/* <CSSTransition
          unmountOnExit
          in={current == 1}
          timeout={500}
          classNames="fade"
        >
          <Cameras2 />
        </CSSTransition> */}
      </div>
    </>
  );
};
export default Index;
