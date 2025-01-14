import React, { useContext } from "react";
import TR from "@/components/tr";
import { GlobalContext } from "@/components/globalContext";
import Cang from "@/components/cang";
import SvgaPlayer from "@/components/svgaPlayer";
import "../index.scss";
import Stone from "@/Left/right/stone";

const Top = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao3 || {};
  const common = state?.common || {};
  return (
    <div className="center_content_comm_top" style={{ paddingTop: 85 }}>
      <div style={{ textAlign: "right", position: "relative" }}>
        <div style={{ position: "relative" }}>
          {(common["4czdgljyx"] || common["5czdgljyx"]) &&
            common["a02jdjyx"] &&
            common["cbf23xtwz"] && (
              <Stone
                dir="left"
                pos={common["4czdgljyx"] ? 5 : 6}
                style={{ right: common["4czdgljyx"] ? 120 : 50 }}
              />
            )}
          <img
            width={1149}
            height={28}
            src={require("../../assets/center/track2.png")}
            alt=""
          />
          <SvgaPlayer
            id="demo8"
            style={{
              height: 28,
              width: 53,
              position: "absolute",
              left: 106,
              top: 0,
            }}
            url={require("../../assets/svga/pidaiL.svga")}
          />
        </div>
        <div style={{ position: "absolute", top: -127, right: 0 }}>
          <Cang
            open={common["4czdgljyx"]}
            lw={8}
            total={10}
            id={312}
            special={true}
          />
        </div>
        <div style={{ position: "absolute", top: -127, right: 80 }}>
          <Cang
            open={common["5czdgljyx"]}
            lw={8}
            total={10}
            id={312}
            special={true}
          />
        </div>
      </div>
      <div className="warehouse">
        <div style={{ display: "flex", position: "relative" }}>
          <Cang
            open={common["3yylczdgljyx"]}
            lw={common["7c_lw7"] || 0}
            total={common["7c_lw7glw"]}
            id="333"
            shou={common["a02jdjyx"] && common["cbf23xtwz"]}
          />
          <TR
            content={common["7c_lw7"]}
            alarm={common["7c_lw7_alarm"]}
            unit="M"
            style={{ marginLeft: 22 }}
          />
          <img
            style={{ position: "absolute", bottom: -40, left: -20 }}
            width={100}
            height={18}
            src={require("../../assets/track2.png")}
            alt=""
          />
        </div>
        <div className="warehouse_sub" style={{ margin: 35 }}>
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
