import React, { useContext, useRef } from "react";
import Marquee from "react-fast-marquee";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";
const Index = () => {
  const { state } = useContext(GlobalContext);
  const title = state?.title || [];
  const headerRef = useRef(null);
  return (
    <div className="left_header_box">
      <div
        onClick={() => window.open("/#/center")}
        style={{
          position: "absolute",
          right: 15,
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
          src={require("../../assets/right.png")}
          alt=""
        />
      </div>
      {/* 放一个定位在页面外的div，用来计算标题宽度 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: -1000,
          color: "transparent",
        }}
        ref={headerRef}
      >
        {title[0]?.content}
      </div>
      {headerRef.current?.clientWidth >= 2520 ? (
        <Marquee speed={headerRef.current?.clientWidth >= 2520 ? 60 : 0}>
          <div style={{ overflow: "hidden" }}>{title[0]?.content}</div>
        </Marquee>
      ) : (
        <div style={{ overflow: "hidden", textAlign: "right" }}>
          {title[0]?.content}
        </div>
      )}
    </div>
  );
};
export default Index;
