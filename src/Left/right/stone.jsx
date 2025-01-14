import React, { useEffect, useMemo, useState } from "react";
import SvgaPlayer from "@/components/svgaPlayer";
const left4 = require(`../../assets/svga/stone/stone_move_left_4.svga`);

/**
 *
 * @param {*dir} 方向：left  right
 * @param {*pos} 位置
 */
export default function Stone({ dir, pos, style }) {
  // 使用 useMemo 优化 style 计算
  const getStyle = useMemo(() => {
    let width = 920;
    if (pos == 4) {
      width = 920;
    } else if (pos == 5) {
      width = 1010;
    } else if (pos == 6) {
      width = 1100;
    } else if (pos == 8) {
      width = 220;
    } else if (pos == 9) {
      width = 110;
    }
    return dir === "left"
      ? { right: 0, width }
      : { left: pos == 9 ? 0 : 130, width };
  }, [dir, pos]);
  return (
    <div
      style={{
        position: "absolute",
        top: -50,
        ...getStyle,
        ...style,
      }}
    >
      {pos && (
        <SvgaPlayer
          id={"stone" + pos}
          url={require(`../../assets/svga/stone/stone_move_${dir}_${pos}.svga`)}
        />
      )}
    </div>
  );
}
