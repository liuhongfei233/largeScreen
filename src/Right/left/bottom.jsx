import React from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import "../index.scss";

const Bottom = () => {
  return (
    <div className="right_content_left_bottom">
      <div className="bottom_main">
        <img height={28} src={require("@/assets/right/track2.png")} alt="" />
        <div style={{ display: "flex", margin: "22px 0" }}>
          <img
            width={66}
            height={91}
            src={require("@/assets/left/wh_close.png")}
            alt=""
          />
          <img
            style={{ margin: "0 22px" }}
            width={66}
            height={91}
            src={require("@/assets/left/wh_man_open.png")}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
          </div>
        </div>
        <img height={28} src={require("@/assets/right/track2.png")} alt="" />
      </div>
      <Player
        className="heatVideo"
        controls={true}
        autoPlay={true}
        muted={true}
        url="https://114.55.89.115:8443/live/test.live.flv"
      />
    </div>
  );
};
export default Bottom;
