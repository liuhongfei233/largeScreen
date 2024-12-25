import React from "react";
import TR from "@/components/tr";
import "../index.scss";

const Top = () => {
  return (
    <div className="right_content_left_top">
      <div className="railway">
        <img height={28} src={require("../../assets/right/track.png")} alt="" />
      </div>
      <div className="warehouse">
        <div className="warehouse_main">
          <img
            style={{ marginRight: 22 }}
            width={66}
            height={91}
            src={require("../../assets/left/wh_man_close.png")}
            alt=""
          />
          <TR content={0} unit="M" />
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
              <div style={{ fontSize: 22 }}>1356.00</div>
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
              <div style={{ fontSize: 22 }}>1183.00</div>
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
              <div style={{ fontSize: 22 }}>812.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
