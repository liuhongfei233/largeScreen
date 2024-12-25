import React from "react";
import Player from "@/components/player";
import "./index.scss";
const cameras = () => {
  return (
    <div className="left_bottom_content">
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live/test.live.flv"
        />
        <div className="carmeraBox_title">4#窑视频窗口</div>
      </div>
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live/test.live.flv"
        />
        <div className="carmeraBox_title">5#窑视频窗口</div>
      </div>
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live/test.live.flv"
        />
        <div className="carmeraBox_title">6#窑视频窗口</div>
      </div>
    </div>
  );
};
export default cameras;
