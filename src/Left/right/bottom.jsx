import React, { useContext } from "react";
import Player from "@/components/player";
// import Player from "@/components/videoPlayer";
import TR from "@/components/tr";
import { GlobalContext } from "@/components/globalContext";
import SvgaPlayer from "@/components/svgaPlayer";
import Cang from "@/components/cang";
import Sha from "./sha";
import "../index.scss";

const Bottom = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao1 || {};
  const cameras = state?.cameras || [];
  return (
    <div className="left_content_right_bottom">
      <Player
        id="444"
        width={341}
        height={192}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[6]}
      />
      <div className="bottom_main" style={{ position: "relative" }}>
        {data?.ydzdgljyx && (
          <Sha
            id="4"
            dir="right"
            pos={
              data["1cpzdsyx"] && data["3tfb1cwz"]
                ? 1
                : data["1cpzdsyx"] && data["3tfb2cwz"]
                ? 2
                : 3
            }
          />
        )}
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%" }}
            height={28}
            src={require("../../assets/left/track.png")}
            alt=""
          />
          <SvgaPlayer
            id="demo1"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              left: 0,
              top: 0,
            }}
            url={require("@/assets/svga/pidaiL.svga")}
          />
        </div>
        <div className="factory_box">
          <div className="factory_line">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Cang
                lw={data["1_1cpclw"]}
                total={data["1_1cpclw_lgw"]}
                open={data["1_1cpcgljyx"]}
                shou={data["1cpzdsyx"] && data["3tfb1cwz"]}
                type={2}
                id="sha11"
              />
              <Cang
                lw={data["1_2cpclw"]}
                total={data["1-2cpclw_lgw"]}
                style={{ margin: "0 22px" }}
                type={2}
                id="sha12"
                open={data["1_2cpcgljyx"]}
                shou={data["1cpzdsyx"] && data["3tfb2cwz"]}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TR
                  content={data["1_1cpclw"]}
                  alarm={data["1_1cpclw_alarm"]}
                  unit="M"
                />
                <TR
                  content={data["1_2cpclw"]}
                  alarm={data["1_2cpclw_alarm"]}
                  unit="M"
                />
              </div>
            </div>
            <div style={{ position: "relative" }}>
              {(data["1_1cpcgljyx"] || data["1_2cpcgljyx"]) && (
                <Sha dir="right" pos={data["1_1cpcgljyx"] ? 4 : 5} id="5" />
              )}
              <img
                height={28}
                style={{ width: "100%" }}
                src={require("../../assets/left/track.png")}
                alt=""
              />
              <SvgaPlayer
                id="demo2"
                style={{
                  height: 28,
                  width: 53,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
                url={require("../../assets/svga/pidaiL.svga")}
              />
              <SvgaPlayer
                id="demo3"
                style={{
                  height: 28,
                  width: 53,
                  position: "absolute",
                  right: -10,
                  top: 0,
                }}
                url={require("../../assets/svga/pidaiR.svga")}
              />
            </div>
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
