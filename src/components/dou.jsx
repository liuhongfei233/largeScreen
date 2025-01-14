import React, { useEffect, useState } from "react";
import SvgaPlayer from "./svgaPlayer";

/**
 * @param {* data} 斗重量数据
 * @param {* open} 斗开关状态
 * @param {* alarm} 斗重量报警状态
 * @param {id}  svgid
 * @param {* shou} 斗收料状态
 */
export default ({ data, open, alarm, id, shou }) => {
  const [num, setNum] = useState(2); //默认空关状态
  useEffect(() => {
    if (data) {
      if (open == 1) {
        if (alarm == 1) {
          setNum(5);
        } else {
          if (data <= 100) {
            setNum(1);
          } else if (data <= 2000) {
            setNum(7);
          } else {
            setNum(3);
          }
        }
      } else {
        if (alarm == 1) {
          setNum(6);
        } else {
          if (data <= 100) {
            setNum(2);
          } else if (data <= 2000) {
            setNum(8);
          } else {
            setNum(4);
          }
        }
      }
    } else {
      if (open == 1) {
        setNum(1);
      } else {
        setNum(2);
      }
    }
  }, [data, open, alarm]);
  return (
    <div style={{ position: "relative" }}>
      {shou && (
        <SvgaPlayer
          style={{
            position: "absolute",
            right: 20,
            top: -20,
            height: 50,
          }}
          id={"doushou" + id}
          url={require(`../assets/svga/stone/drop_stone_2.svga`)}
        />
      )}
      <img
        style={{ width: "100%" }}
        src={require(`../assets/dou/${num}.png`)}
        alt=""
      />
      {open == 1 && (
        <SvgaPlayer
          id={"douchu" + id}
          style={{
            height: 50,
            position: "absolute",
            right: -10,
            bottom: -40,
          }}
          url={require("../assets/svga/stone/drop_stone_2.svga")}
        />
      )}
    </div>
  );
};
