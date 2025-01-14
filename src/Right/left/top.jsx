import React, { useContext } from "react";
import TR from "@/components/tr";
import { GlobalContext } from "@/components/globalContext";
import Cang from "@/components/cang";
import SvgaPlayer from "@/components/svgaPlayer";
import "../index.scss";
import Stone from "@/Left/right/stone";

const Top = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao4 || {};
  const common = state?.common || {};
  return (
    <div className="right_content_left_top">
      <div className="railway" style={{ position: "relative" }}>
        {(common["4czdgljyx"] || common["5czdgljyx"]) &&
          common["a02jdjyx"] &&
          common["cbf24xtwz"] && <Stone dir="right" pos={9} />}
        <img height={28} src={require("../../assets/right/track.png")} alt="" />
        <SvgaPlayer
          id="demo10"
          style={{
            height: 28,
            width: 53,
            position: "absolute",
            left: 135,
            top: 0,
          }}
          url={require("../../assets/svga/pidaiR.svga")}
        />
      </div>
      <div className="warehouse">
        <div className="warehouse_main" style={{ position: "relative" }}>
          <Cang
            style={{ marginRight: 22 }}
            open={common["4yylczdgljyx"]}
            lw={common["8c_lw8"] || 0}
            shou={common["a02jdjyx"] && common["cbf24xtwz"]}
            total={common["8c_lw8glw"]}
            id="can4444"
          />
          <TR
            content={common["8c_lw8"]}
            alarm={common["8c_lw8_alarm"]}
            unit="M"
          />
          <img
            style={{ position: "absolute", bottom: -40, left: -20 }}
            width={100}
            height={18}
            src={require("../../assets/track2.png")}
            alt=""
          />
        </div>
        <div className="warehouse_sub" style={{ margin: 0 }}>
          <div className="warehouse_subox">
            <img
              style={{ width: 74 }}
              src={require("../../assets/left/heat3.png")}
              alt=""
            />
            <div className="warehouse_subox_right">
              <div style={{ fontSize: 18 }}>
                产能 <span style={{ color: "#8B99AC" }}>T/D</span>
              </div>
              <div style={{ fontSize: 22 }}>{data?.cn || 0}</div>
            </div>
          </div>
          <div className="warehouse_subox" style={{ marginLeft: 13 }}>
            <img
              style={{ width: 2, height: 44 }}
              src={require("../../assets/left/line.png")}
              alt=""
            />
            <img
              style={{ width: 74 }}
              src={require("../../assets/left/heat2.png")}
              alt=""
            />
            <div className="warehouse_subox_right">
              <div style={{ fontSize: 18 }}>
                热耗 <span style={{ color: "#8B99AC" }}>kCal/kg</span>
              </div>
              <div style={{ fontSize: 22 }}>{data?.rh || 0}</div>
            </div>
          </div>
          <div className="warehouse_subox" style={{ marginLeft: 13 }}>
            <img
              style={{ width: 2, height: 44 }}
              src={require("../../assets/left/line.png")}
              alt=""
            />
            <img
              style={{ width: 74 }}
              src={require("../../assets/left/heat.png")}
              alt=""
            />
            <div className="warehouse_subox_right">
              <div style={{ fontSize: 18 }}>
                热值 <span style={{ color: "#8B99AC" }}>kCal/Nm3</span>
              </div>
              <div style={{ fontSize: 22 }}>{data?.mqrz || 0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
