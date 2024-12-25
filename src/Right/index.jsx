import React from "react";
import Adaptive from "@/Adaptive";
import Header from "./header";
import LeftTop from "./left/top";
import LeftCenter from "./left/center";
import LeftBottom from "./left/bottom";
import RightTop from "./right/top";
import RightBottom from "./right/bottom";
import "./index.scss";

export default function Index({ isShow }) {
  return (
    <Adaptive isShow={isShow}>
      <div className="right_container">
        <div className="right_header">
          <Header />
        </div>
        <div className="right_content">
          <div className="right_content_left">
            <LeftTop />
            <LeftCenter />
            <LeftBottom />
          </div>
          <div className="right_content_right">
            <RightTop />
            <RightBottom />
          </div>
        </div>
      </div>
    </Adaptive>
  );
}
