import React, { useContext, useEffect, useState } from "react";
import TR from "@/components/tr";
import { GlobalContext } from "@/components/globalContext";
import Cang from "@/components/cang";
import SvgaPlayer from "@/components/svgaPlayer";
import Stone from "./stone";

import "../index.scss";

const Top = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao1 || {};
  const common = state?.common || {};
  return (
    <div className="left_content_right_top">
      <div className="railway" style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src={require("../../assets/left/railway.png")}
          alt=""
        />
        {(common["car7_1"] || common["car7_2"] || common["car7_3"]) && (
          <img
            style={{
              position: "absolute",
              top: -50,
              left: common["car7_1"] ? 100 : common["car7_2"] ? 190 : 280,
              zIndex: 999,
            }}
            width={84}
            height={51}
            src={require("../../assets/moveCar.png")}
            alt=""
          />
        )}
        {/* 轨道运输 */}
        {(common["2czdgljyx"] || common["3czdgljyx"]) && (
          <Stone
            dir="left"
            pos={
              common["car7_1"]
                ? 6
                : common["car7_2"]
                ? 5
                : common["car7_3"]
                ? 4
                : 0
            }
          />
        )}
      </div>
      <div className="warehouse">
        <div className="warehouse_main" style={{ position: "relative" }}>
          <Cang
            open={data["1ylczdgljyx"]}
            lw={common["1c_lw1"] || 0}
            shou={
              (common["2czdgljyx"] || common["2czdgljyx"]) && common["car7_1"]
            }
            total={common["1c_lw1glw"]}
            id={1}
          />
          <Cang
            open={data["2ylczdgljyx"]}
            lw={common["2c_lw2"] || 0}
            shou={
              (common["2czdgljyx"] || common["2czdgljyx"]) && common["car7_2"]
            }
            total={common["2c_lw2glw"]}
            id={11}
          />
          <Cang
            open={data["3ylczdgljyx"]}
            lw={common["3c_lw3"] || 0}
            shou={
              (common["2czdgljyx"] || common["2czdgljyx"]) && common["car7_3"]
            }
            total={common["3c_lw3glw"]}
            id={111}
          />
          <div className="warehouse_list">
            <TR
              content={common["1c_lw1"] || 0}
              alarm={common["1c_lw1_alarm"]}
              unit="M"
            />
            <TR
              content={common["2c_lw2"] || 0}
              alarm={common["2c_lw2_alarm"]}
              unit="M"
            />
            <TR
              content={common["3c_lw3"] || 0}
              alarm={common["3c_lw3_alarm"]}
              unit="M"
            />
          </div>
          {(data["2ylczdgljyx"] || data["3ylczdgljyx"]) && (
            <>
              {data["2ylczdgljyx"] ? (
                <SvgaPlayer
                  style={{
                    position: "absolute",
                    width: 150,
                    bottom: -30,
                    left: 0,
                  }}
                  id={"stone111223"}
                  url={require(`../../assets/svga/stone/1.svga`)}
                />
              ) : (
                <SvgaPlayer
                  style={{
                    position: "absolute",
                    width: 220,
                    bottom: -30,
                    right: 150,
                  }}
                  id={"stone1112334"}
                  url={require(`../../assets/svga/stone/1.svga`)}
                />
              )}
            </>
          )}
          <img
            style={{ position: "absolute", bottom: -40, left: 0 }}
            width={270}
            height={18}
            src={require("../../assets/track1.png")}
            alt=""
          />
        </div>
        <div className="warehouse_sub">
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
