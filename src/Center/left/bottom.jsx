import React from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import "../index.scss";

const Bottom = () => {
  return (
    <div className="center_content_left_bottom">
      <div className="center_content_left_bottom_left">
        <img height="28px" src={require("@/assets/center/track.png")} />
        <div className="center_content_left_bottom_left_img">
          <img
            width={66}
            height={91}
            src={require("@/assets/left/wh_close.png")}
          />
          <img
            style={{ margin: "0 22px" }}
            width={66}
            height={91}
            src={require("@/assets/left/wh_close.png")}
          />
          <img
            style={{ marginRight: "22px" }}
            width={66}
            height={91}
            src={require("@/assets/left/wh_close.png")}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
          </div>
        </div>
        <div style={{ marginLeft: 39 }}>
          <img
            height="28px"
            width={707}
            src={require("@/assets/center/track.png")}
          />
        </div>
      </div>
      <Player
        className="heatVideo"
        controls={true}
        autoPlay={true}
        muted={true}
        url="https://114.55.89.115:8443/live1/test1.live.flv"
      />
    </div>
  );
};
export default Bottom;
