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
  const data = state?.yao4 || {};
  const common = state?.common || {};
  return (
    <div className="right_content_left_bottom">
      <div className="bottom_main">
        <div style={{ position: "relative" }}>
          {data?.ydzdgljyx ? <Sha id="6" dir="left" pos={10} /> : ""}
          <img
            height={28}
            src={require("../../assets/right/track2.png")}
            alt=""
          />
          <SvgaPlayer
            id="demo12"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              right: 0,
              top: 0,
            }}
            url={require("../../assets/svga/pidaiR.svga")}
          />
        </div>
        <div
          style={{
            display: "flex",
            margin: "25px 0",
          }}
        >
          <Cang
            lw={common["34_2cpclw"]}
            total={common["34_2cpclw_limt"]}
            open={common["34_2cpczdgljyx"]}
            shou={common["b03jdjyx"] && common["34ycbf1_2"]}
            type={2}
            id="sha44"
          />
          <Cang
            lw={common["34_3cpclw"]}
            total={common["34_3cpclw_limt"]}
            open={common["34_3cpczdgljyx"]}
            shou={
              common["b03jdjyx"] && common["34ycbf1_13"] && common["34ycbf2_3"]
            }
            type={2}
            id="sha444"
            style={{ margin: "0 22px" }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 15 }}
          >
            <TR content={common["34_2cpclw"]} unit="M" />
            <TR content={common["34_3cpclw"]} unit="M" />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {(common["34_2cpczdgljyx"] || common["34_3cpczdgljyx"]) && (
            <Sha dir="left" pos={12} id="7" />
          )}
          <img
            height={28}
            src={require("../../assets/right/track2.png")}
            alt=""
          />
          <SvgaPlayer
            id="demo11"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              right: 0,
              top: 0,
            }}
            url={require("../../assets/svga/pidaiR.svga")}
          />
        </div>
      </div>
      <Player
        width={341}
        height={192}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[15]}
      />
    </div>
  );
};
export default Bottom;
