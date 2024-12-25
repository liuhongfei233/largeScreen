import React from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import "../index.scss";

const Bottom = () => {
  return (
    <div className="center_content_right_bottom">
      <Player
        className="heatVideo"
        controls={true}
        autoPlay={true}
        muted={true}
        url="https://114.55.89.115:8443/live1/test1.live.flv"
      />
      <div className="center_content_right_bottom_right">
        <img
          height={28}
          src={require("../../assets/center/track3.png")}
          alt=""
        />
        <div style={{ display: "flex", marginTop: 10 }}>
          <img
            width={114}
            height={195}
            src={require("../../assets/center/factory2.png")}
            alt=""
          />
          <div
            style={{
              marginLeft: 54,
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <img
              style={{ margin: "12px 0 23px 0" }}
              width={66}
              height={91}
              src={require("../../assets/left/wh_close.png")}
              alt=""
            />
            <img
              height={28}
              src={require("../../assets/center/track4.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottom;
