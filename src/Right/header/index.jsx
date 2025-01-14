import React, { useContext, useRef } from "react";
import Marquee from "react-fast-marquee";
import { GlobalContext } from "@/components/globalContext";
import "../index.scss";
const Index = () => {
  const { state } = useContext(GlobalContext);
  const title = state?.title || [];
  const headerRef = useRef(null);
  return (
    <div className="right_header_box">
      <div
        onClick={() => window.open("/#/center")}
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
      <Marquee speed={headerRef.current?.clientWidth >= 2520 ? 60 : 0}>
        <div style={{ overflow: "hidden" }} ref={headerRef}>
          {title[1]?.content}
        </div>
      </Marquee>
    </div>
  );
};
export default Index;
