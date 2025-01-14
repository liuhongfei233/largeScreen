import React, { useContext } from "react";
import Clock from "@/components/clock";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";
const Index = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.weather || {};
  const title = state?.title || [];
  return (
    <div className="center_header_box">
      <div
        onClick={() => window.open("/#/left")}
        style={{
          position: "absolute",
          left: 15,
          top: 48,
          zIndex: 999,
          cursor: "pointer",
          fontSize: 0,
          overflow: "hidden",
        }}
      >
        <img
          width={52}
          height={48}
          src={require("../../assets/left.png")}
          alt=""
        />
      </div>
      <div
        onClick={() => window.open("/#/right")}
        style={{
          position: "absolute",
          right: 15,
          top: 48,
          zIndex: 999,
          cursor: "pointer",
          fontSize: 0,
        }}
      >
        <img
          width={52}
          height={48}
          src={require("../../assets/right.png")}
          alt=""
        />
      </div>
      <div className="title">{title[2]?.content}</div>
      <div className="time">
        <span style={{ marginRight: 15 }}>{data?.weatherDate}</span>
        <div className="clock">
          <Clock />
        </div>
      </div>
    </div>
  );
};
export default Index;
