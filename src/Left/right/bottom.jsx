import React from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import "../index.scss";

const Bottom = () => {
  return (
    <div className="left_content_right_bottom">
      <Player
        className="heatVideo"
        controls={true}
        autoPlay={true}
        muted={true}
        url="https://114.55.89.115:8443/live/test.live.flv"
      />
      <div className="bottom_main">
        <img
          style={{ width: "100%" }}
          src={require("../../assets/left/track.png")}
          alt=""
        />
        <div className="factory_box">
          <div className="factory_line">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: 66, height: 91 }}
                src={require("../../assets/left/wh_close.png")}
                alt=""
              />
              <img
                style={{ width: 66, height: 91, margin: "0 22px" }}
                src={require("../../assets/left/wh_man_open.png")}
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TR content={0} unit="M" />
                <TR content={0} unit="M" />
              </div>
            </div>
            <img
              style={{ width: "100%" }}
              src={require("../../assets/left/track.png")}
              alt=""
            />
          </div>
          <img
            style={{ width: 114 }}
            src={require("../../assets/left/factory1.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Bottom;
