import React, { useContext } from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import Cang from "@/components/cang";
import SvgaPlayer from "@/components/svgaPlayer";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";
import Sha from "@/Left/right/sha";

const Bottom = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  const common = state?.common || {};
  const data = state?.yao3 || {};
  return (
    <div className="center_content_right_bottom">
      <Player
        width={341}
        height={192}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[12]}
      />
      <div className="center_content_right_bottom_right">
        <div style={{ position: "relative" }}>
          {data?.ydzdgljyx ? <Sha dir="right" pos={3} id="3" /> : ""}
          <img
            height={28}
            width="100%"
            src={require("../../assets/center/track3.png")}
            alt=""
          />
          <SvgaPlayer
            id="demo9"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              left: 0,
              top: 0,
            }}
            url={require("../../assets/svga/pidaiL.svga")}
          />
        </div>
        <div style={{ display: "flex" }}>
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
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "25px 0",
              }}
            >
              <TR content={common["34_1cpclw"]} unit="M" />
              <Cang
                lw={common["34_1cpclw"]}
                total={common["34_1cpclw_limt"]}
                open={common["34_1cpczdgljyx"]}
                type={2}
                shou={
                  common["b03jdjyx"] &&
                  common["34ycbf1_13"] &&
                  common["34ycbf2_1"]
                }
                id="sha33"
                style={{ margin: "0 22px" }}
              />
            </div>
            <div style={{ position: "relative" }}>
              {(common["34_1cpczdgljyx"] || common["34_2cpczdgljyx"]) && (
                <Sha dir="left" pos={11} id="3333" />
              )}
              <img
                height={28}
                width="100%"
                src={require("../../assets/center/track4.png")}
                alt=""
              />
              <SvgaPlayer
                id="demo91"
                style={{
                  height: 28,
                  width: 53,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
                url={require("../../assets/svga/pidaiL.svga")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottom;
