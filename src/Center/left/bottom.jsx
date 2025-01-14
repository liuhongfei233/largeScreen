import React, { useContext } from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import SvgaPlayer from "@/components/svgaPlayer";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";
import Cang from "@/components/cang";
import Sha from "@/Left/right/sha";

const Bottom = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  const data = state?.yao2 || {};
  const yao1 = state?.yao1 || {};
  return (
    <div className="center_content_left_bottom">
      <div className="center_content_left_bottom_left">
        <div style={{ position: "relative" }}>
          {/* {yao1?.ydzdgljyx  &&
            yao1["1cpzdsyx"] ! &&
            yao1["2cpzdsyx"] ! && <Sha dir="right" pos={6} />} */}

          {data?.ydzdgljyx && <Sha dir="left" pos={7} id="1" />}

          <img height="28px" src={require("@/assets/center/track.png")} />
          <SvgaPlayer
            id="demo5"
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
        <div className="center_content_left_bottom_left_img">
          <Cang
            lw={data["1cpclw"]}
            total={data["1cpclw_glw"]}
            open={data["2_1czdgljyx"]}
            shou={data["2gxzxzdsyx"] && data["24_1fb1cw"]}
            type={2}
            id="sha22"
          />
          <Cang
            lw={data["2cpclw"]}
            total={data["2cpclw_glw"]}
            style={{ margin: "0 22px" }}
            open={data["2_2czdgljyx"]}
            shou={data["24jdj1yx"] && data["24_2fb2cw"]}
            type={2}
            id="sha23"
          />
          <Cang
            lw={data["3cpclw"]}
            total={data["3cpclw_glw"]}
            open={data["2_3czdgljyx"]}
            shou={data["24jdj1yx"] && data["24_2fb3cw"]}
            type={2}
            id="sha24"
            style={{ marginRight: "22px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TR content={data["1cpclw"]} unit="M" />
            <TR content={data["2cpclw"]} unit="M" />
            <TR content={data["3cpclw"]} unit="M" />
          </div>
        </div>
        <div style={{ marginLeft: 39, position: "relative" }}>
          <SvgaPlayer
            id="demo4"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              left: -10,
              top: 0,
            }}
            url={require("../../assets/svga/pidaiL.svga")}
          />
          {(data["2_1czdgljyx"] ||
            data["2_2czdgljyx"] ||
            data["2_3czdgljyx"]) && (
            <Sha dir="right" id="2" pos={data["2_1czdgljyx"] ? 4 : 5} />
          )}
          <img
            height={28}
            width={707}
            src={require("@/assets/center/track.png")}
          />
          <SvgaPlayer
            id="demo51"
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
        url={cameras[9]}
      />
    </div>
  );
};
export default Bottom;
