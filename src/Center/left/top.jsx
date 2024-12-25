import React from "react";
import TR from "@/components/tr";
import "../index.scss";

const Top = () => {
  return (
    <div className="center_content_comm_top">
      <div className="railway">
        <img
          style={{ width: "100%" }}
          src={require("../../assets/center/railway.png")}
          alt=""
        />
      </div>
      <div className="warehouse">
        <div className="warehouse_main">
          <div className="warehouse_box">
            <img
              style={{ width: "100%" }}
              src={require("../../assets/left/wh_close.png")}
              alt=""
            />
          </div>
          <div className="warehouse_box">
            <img
              style={{ width: "100%" }}
              src={require("../../assets/left/wh_man_close.png")}
              alt=""
            />
          </div>
          <div className="warehouse_box">
            <img
              style={{ width: "100%" }}
              src={require("../../assets/left/wh_man_open.png")}
              alt=""
            />
          </div>
          <div className="warehouse_list">
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
            <TR content={0} unit="M" />
          </div>
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
