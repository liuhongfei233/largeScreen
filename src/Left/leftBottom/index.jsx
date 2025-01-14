import React, { useContext, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Player from "@/components/player";
import { CSSTransition } from "react-transition-group";
import { GlobalContext } from "@/components/globalContext";
import TitleBox from "@/components/titleBox";
import Cameras from "./cameras";
import Cameras2 from "./cameras2";
import "./index.scss";
const Index = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  const [current, setCurrent] = useState(0);
  const List = [
    { key: 1, cameras: <Cameras /> },
    { key: 2, cameras: <Cameras2 /> },
  ];
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let num = current;
  //     if (current == List.length - 1) {
  //       setCurrent(0);
  //     } else {
  //       num++;
  //       setCurrent(num);
  //     }
  //   }, 10000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [current]);
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
      <div className="left_bottom_container">
        {/* <CSSTransition
          unmountOnExit
          in={current == 0}
          timeout={500}
          classNames="fade"
        > */}
        <Cameras />
        {/* </CSSTransition>
        <CSSTransition
          unmountOnExit
          in={current == 1}
          timeout={500}
          classNames="fade"
        >
          <Cameras2 />
        </CSSTransition> */}
        {/* <Marquee speed={20}>
          <Player
            width={368}
            height={285}
            controls={true}
            autoPlay={true}
            muted={true}
            url={cameras[0]}
            style={{ marginRight: 10 }}
          />
          <Player
            width={368}
            height={285}
            controls={true}
            autoPlay={true}
            muted={true}
            url={cameras[1]}
            style={{ marginRight: 10 }}
          />
          <Player
            width={368}
            height={285}
            controls={true}
            autoPlay={true}
            muted={true}
            url={cameras[2]}
            style={{ marginRight: 10 }}
          />
          <Player
            width={368}
            height={285}
            controls={true}
            autoPlay={true}
            muted={true}
            url={cameras[3]}
            style={{ marginRight: 10 }}
          />
        </Marquee> */}
      </div>
    </>
  );
};
export default Index;
