import React, { useEffect, useState } from "react";
import SvgaPlayer from "@/components/svgaPlayer";
/**
 * 窑口料器位置限位公共方法
 * @param {object} data 窑数据
 * @param {boolean} open 仓是否放料
 * @param {string} shou 仓是否收料
 * @param {string} lw 仓料位（m）
 * @param {string} total 仓料位总高度 (m)
 * @param {object} style 样式
 * @param {number} id svgid
 * @param {number} type 1 石料 2 沙料
 * @param {boolean} special 特殊cang
 */
export default ({ shou, open, lw, total, style, id, type = 1, special }) => {
  const [imgName, setImgName] = useState("仓-0-关");
  const percent = (lw / total) * 100;
  useEffect(() => {
    if (percent == 0) {
      setImgName(`仓-0-${open ? "开" : "关"}`);
    } else if (percent < 50) {
      setImgName(`仓-30-${open ? "开" : "关"}`);
    } else if (percent < 60) {
      setImgName(`仓-50-${open ? "开" : "关"}`);
    } else if (percent < 70) {
      setImgName(`仓-60-${open ? "开" : "关"}`);
    } else if (percent < 80) {
      setImgName(`仓-70-${open ? "开" : "关"}`);
    } else if (percent < 100) {
      setImgName(`仓-80-${open ? "开" : "关"}`);
    } else {
      setImgName(`仓-100-${open ? "开" : "关"}`);
    }
  }, [open, lw, total]);
  return (
    <div style={{ ...style, fontSize: 0, position: "relative" }}>
      {shou && (
        <SvgaPlayer
          style={{
            position: "absolute",
            top: -40,
            left: 15,
            height: 50,
            width: 50,
          }}
          id={"shou" + id}
          url={require(`../assets/svga/stone/${
            type == 1 ? "drop_stone_2" : "fallingS1"
          }.svga`)}
        />
      )}

      <img
        width={66}
        height={91}
        src={require(`../assets/cang/${imgName}.png`)}
        alt=""
      />
      {percent && total && !special && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: 18,
            zIndex: 9999,
          }}
        >
          {parseInt(percent) + "%"}
        </div>
      )}

      {open && type == 1 && (
        <SvgaPlayer
          style={{
            position: "absolute",
            left: 10,
            bottom: !special ? -25 : -50,
            height: 50,
            width: 50,
          }}
          id={"stone" + id}
          url={require(`../assets/svga/stone/drop_stone_2.svga`)}
        />
      )}
      {open && type == 2 && (
        <SvgaPlayer
          style={{ position: "absolute", left: 0, bottom: -20, height: 40 }}
          id={"sha" + id}
          url={require(`../assets/svga/fallingS.svga`)}
        />
      )}
    </div>
  );
};
