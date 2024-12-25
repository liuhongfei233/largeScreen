import React from "react";
import Player from "@/components/player";
import "../../index.scss";
const cameras = () => {
  return (
    <div className="right_bottom_content">
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live1/test1.live.flv"
        />
        <div className="carmeraBox_title">1#窑视频窗口</div>
      </div>
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live1/test1.live.flv"
        />
        <div className="carmeraBox_title">2#窑视频窗口</div>
      </div>
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live1/test1.live.flv"
        />
        <div className="carmeraBox_title">3#窑视频窗口</div>
      </div>
    </div>
  );
};
export default cameras;
