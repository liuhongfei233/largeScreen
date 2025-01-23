import React, { useContext } from "react";
import TR from "@/components/tr";
import { GlobalContext } from "@/components/globalContext";
import Cang from "@/components/cang";
import SvgaPlayer from "@/components/svgaPlayer";
import Stone from "../../Left/right/stone";
import "../index.scss";

const Top = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao2 || {};
  const common = state?.common || {};
  return (
    <div className="center_content_comm_top">
      <div className="railway">
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%" }}
            src={require("../../assets/center/railway.png")}
            alt=""
          />
          {(common["car7_4"] || common["car7_5"] || common["car7_6"]) && (
            <img
              style={{
                position: "absolute",
                top: -50,
                left: common["car7_4"] ? 100 : common["car7_5"] ? 190 : 290,
                zIndex: 999,
              }}
              width={84}
              height={51}
              src={require("../../assets/moveCar.png")}
              alt=""
            />
          )}

          {(common["2czdgljyx"] || common["3czdgljyx"]) &&
            (common["car7_4"] || common["car7_5"] || common["car7_6"]) && (
              <Stone dir="right" pos={8} />
            )}
        </div>
        <div style={{ position: "absolute", top: -150, left: 0 }}>
          <Cang
            open={common["2czdgljyx"]}
            lw={8}
            total={10}
            id={212}
            special={true}
          />
        </div>
        <div style={{ position: "absolute", top: -150, left: 80 }}>
          <Cang
            open={common["3czdgljyx"]}
            lw={8}
            total={10}
            id={213}
            special={true}
          />
        </div>
      </div>
      <div className="warehouse" style={{ position: "relative" }}>
        <div className="warehouse_main">
          <Cang
            open={data["4ylczdgljyx"]}
            lw={common["4c_lw4"] || 0}
            total={common["4c_lw4glw"]}
            id={2}
            shou={
              (common["2czdgljyx"] || common["3czdgljyx"]) && common["car7_4"]
            }
          />
          <Cang
            open={data["5ylczdgljyx"]}
            lw={common["5c_lw5"] || 0}
            total={common["5c_lw5glw"]}
            id={22}
            shou={
              (common["2czdgljyx"] || common["3czdgljyx"]) && common["car7_5"]
            }
          />
          <Cang
            open={data["6ylczdgljyx"]}
            lw={common["6c_lw6"] || 0}
            total={common["6c_lw6glw"]}
            id={222}
            shou={
              (common["2czdgljyx"] || common["3czdgljyx"]) && common["car7_6"]
            }
          />
          <div className="warehouse_list">
            <TR
              content={common["4c_lw4"]}
              alarm={data?.lc_lw4_alarm}
              unit="M"
            />
            <TR
              content={common["5c_lw5"]}
              alarm={data?.lc_lw5_alarm}
              unit="M"
            />
            <TR
              content={common["6c_lw6"]}
              alarm={data?.lc_lw6_alarm}
              unit="M"
            />
          </div>
          {(data["5ylczdgljyx"] || data["6ylczdgljyx"]) && (
            <>
              {data["5ylczdgljyx"] ? (
                <SvgaPlayer
                  style={{
                    position: "absolute",
                    width: 150,
                    bottom: 0,
                    left: 0,
                  }}
                  id={"stone1112234"}
                  url={require(`../../assets/svga/stone/1.svga`)}
                />
              ) : (
                <SvgaPlayer
                  style={{
                    position: "absolute",
                    width: 220,
                    bottom: 0,
                    left: 0,
                  }}
                  id={"stone11123345"}
                  url={require(`../../assets/svga/stone/1.svga`)}
                />
              )}
            </>
          )}

          <img
            style={{ position: "absolute", bottom: -10, left: 0 }}
            width={270}
            height={18}
            src={require("../../assets/track1.png")}
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
