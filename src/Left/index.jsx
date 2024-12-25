import React, { useEffect } from "react";
import Adaptive from "@/Adaptive";
import LeftHeader from "./leftHeader";
import LeftTopLeft from "./leftTop/leftTopLeft";
import LeftTopRight from "./leftTop/leftTopRight";
import LeftCenterLeft from "./leftCenter/leftCenterLeft";
import LeftCenterRight from "./leftCenter/leftCenterRight";
import LeftBottom from "./leftBottom";
import RightTop from "./right/top";
import Center from "./right/center";
import Bottom from "./right/bottom";
import "./index.scss";
import { useWebSocket } from "@/components/webSocket";

export default function Index({ isShow }) {
  const { messages, connectWebSocket } = useWebSocket(
    "ws://114.55.89.115:58080/webSocket"
  );
  console.log("🚀 ~ Index ~ messages:", messages);
  useEffect(() => {
    // connectWebSocket();
  }, []);

  return (
    <Adaptive isShow={isShow}>
      <div className="left_container">
        <div className="left_header">
          <LeftHeader />
        </div>
        <div className="left_content">
          <div className="left_content_left">
            <div className="left_content_left_top">
              <div className="left_content_left_top_left">
                <LeftTopLeft />
              </div>
              <div className="left_content_left_top_right">
                <LeftTopRight />
              </div>
            </div>
            <div className="left_content_left_center">
              <div className="left_content_left_center_left">
                <LeftCenterLeft />
              </div>
              <div className="left_content_left_center_right">
                <LeftCenterRight />
              </div>
            </div>
            <div className="left_content_left_bottom">
              <LeftBottom />
            </div>
          </div>
          <div className="left_content_right">
            <RightTop />
            <Center />
            <Bottom />
          </div>
        </div>
      </div>
    </Adaptive>
  );
}
