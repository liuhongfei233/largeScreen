import React, { useEffect, useState } from "react";
import SvgaPlayer from "./svgaPlayer";
import { Progress } from "antd";
import { Decoration9 } from "@jiaminghi/data-view-react";

export default ({ total, onComplete, id }) => {
  const [num, setNum] = useState(total);
  // useEffect(() => {
  //   let intervalId;
  //   const countdown = () => {
  //     setNum((prevNum) => {
  //       if (prevNum > 0) {
  //         return prevNum - 1;
  //       }
  //       clearInterval(intervalId);
  //       onComplete && onComplete();
  //       return 0;
  //     });
  //   };
  //   intervalId = setInterval(countdown, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <Decoration9 style={{ width: "60px", height: "60px" }}>
      <span style={{ color: "#fff" }}>{total}</span>
    </Decoration9>
    // <div style={{ position: "relative", width: 80, height: 80 }}>
    //   <SvgaPlayer
    //     style={{ width: 80, height: 80 }}
    //     id={"cutdown" + id}
    //     url={require(`../assets/svga/circle.svga`)}
    //   />
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: "50%",
    //       left: "50%",
    //       transform: "translate(-50%, -50%)",
    //       color: "#fff",
    //       zIndex: 9999,
    //     }}
    //   >
    //     {total}
    //   </div>
    // </div>
    // <Progress
    //   type="circle"
    //   percent={(total / 60) * 100}
    //   size={55}
    //   format={() => (
    //     <span style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
    //       {total}s
    //     </span>
    //   )}
    // />
  );
};
