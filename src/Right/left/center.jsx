import React from "react";
import Player from "@/components/player";
import TR from "@/components/tr";
import { Progress } from "antd";

const Center = () => {
  return (
    <div className="yao" style={{ marginLeft: 15 }}>
      <div className="yao_main">
        <img
          style={{ width: "100%" }}
          src={require("../../assets/left/yao.png")}
          alt=""
        />
      </div>
      <div className="liangdou">
        <img
          style={{ width: "100%" }}
          src={require("../../assets/left/liangdou.png")}
          alt=""
        />
      </div>
      <div className="player">
        <Player
          style={{ width: 238, height: 134 }}
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live1/test1.live.flv"
        />
        <Player
          style={{ width: 238, height: 134, marginTop: 10 }}
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live1/test1.live.flv"
        />
      </div>
      <div className="CEMS">
        <div className="CEMS_main">
          <div
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            CEMS系统
          </div>
          <TR name="温度" content="11374" unit="℃" />
          <TR name="氧量" content="94" unit="%" />
          <TR name="粉尘" content="0.2" unit="mg/Nm" />
          <TR name="折算" content="0.2" unit="mg/Nm" />
          <TR name="压力" content="0" unit="kPa" />
          <TR name="流速" content="0" unit="m3/h" />
        </div>
        <TR content="156" unit="℃" />
      </div>
      <div className="yao_left">
        <div
          style={{
            fontSize: 18,
            color: "#fff",
          }}
        >
          上℃
        </div>
        <TR name="1" content="1374" />
        <TR name="2" content="1374" />
        <TR name="3" content="1374" />
        <TR name="4" content="1374" />
        <TR name="5" content="1374" />
        <TR name="6" content="1374" />
      </div>
      <div className="yao_right">
        <TR
          content="156"
          unit="℃"
          style={{ marginBottom: 20, marginLeft: 39 }}
        />
        <TR
          content="1156"
          unit="℃"
          style={{ marginBottom: 10, marginLeft: 39 }}
        />
        <TR name="下1" content="1374" unit="℃" />
        <TR name="下2" content="1374" unit="℃" />
        <TR name="下3" content="1374" unit="℃" />
        <TR name="下4" content="1374" unit="℃" />
        <TR name="下5" content="1374" unit="℃" />
        <TR name="下6" content="1374" unit="℃" />
      </div>
      <div className="yao_bottom_left">
        <TR content="21874" unit="℃" />
        <div style={{ display: "flex", alignItems: "end" }}>
          <div>
            <TR content="874" />
            <TR content="874" />
            <TR content="874" />
          </div>
          <div>
            <TR content="874" />
            <TR content="874" />
          </div>
        </div>
      </div>
      <div className="yao_bottom_right">
        <TR content="549.00" unit="kpa" />
        <TR content="874" unit="℃" />
      </div>
      <div className="yao_right_bottom">
        <div style={{ marginRight: 10 }}>
          <TR content="-1670" unit="kpa" />
          <TR content="0.5" unit="A" />
          <TR content="0.5" unit="rpm" />
        </div>
        <div>
          <TR content="-1670" unit="kPa" />
          <TR content="156" unit="℃" />
        </div>
      </div>
      <div className="yao_right_bottom2">
        <TR content="0.5" unit="A" />
      </div>
      <div className="yao_top_right">
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#fff",
            marginBottom: 10,
          }}
        >
          称重量
        </div>
        <TR content="137.4" unit="kg" />
        <TR content="15" unit="HZ" />
        <TR content="0" unit="A" />
        <TR content="上超" />
      </div>
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <TR content="0" unit="kpa" />
        <TR content="0" unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 538, bottom: 6 }}>
        <TR content="0" unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 800, bottom: 6 }}>
        <TR content="0" unit="kpa" />
        <TR content="0" unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 450, bottom: 0 }}>
        <img
          style={{ width: 87, height: 85 }}
          src={require("../../assets/left/dou_close.png")}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", left: 390, bottom: 0 }}>
        <Progress
          type="circle"
          percent={70}
          size={55}
          format={() => (
            <span style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
              12s
            </span>
          )}
        />
      </div>
      <div style={{ position: "absolute", left: 572, top: 75 }}>
        <TR content="上限" />
      </div>
      <div style={{ position: "absolute", left: 688, top: 107 }}>
        <TR content="9374" unit="℃" />
      </div>
    </div>
  );
};
export default Center;
