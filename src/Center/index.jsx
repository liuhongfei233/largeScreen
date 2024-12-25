import React from "react";
import Adaptive from "@/Adaptive";
import LeftCenter from "./left/center";
import RightCenter from "./right/center";
import LeftTop from "./left/top";
import LeftBottom from "./left/bottom";
import RightTop from "./right/top";
import RightBottom from "./right/bottom";
import Header from "./header";

import "./index.scss";

export default function Index({ isShow }) {
  return (
    <Adaptive isShow={isShow}>
      <div className="center_container">
        <div className="center_header">
          <Header />
        </div>
        <div className="center_content">
          <div className="center_content_comm" style={{ marginRight: 50 }}>
            <LeftTop />
            <LeftCenter />
            <LeftBottom />
            <div className="center_content_comm_bottom"></div>
          </div>
          <div className="center_content_comm">
            <RightTop />
            <RightCenter />
            <RightBottom />
          </div>
        </div>
      </div>
    </Adaptive>
  );
}
