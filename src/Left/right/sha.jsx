import React, { useMemo } from "react";
import SvgaPlayer from "@/components/svgaPlayer";

export default ({ dir, pos, id }) => {
  // 使用 useMemo 优化 style 计算
  const getStyle = useMemo(() => {
    let style = {};
    if (pos == 1) {
      style.width = 190;
      style.left = 0;
    } else if (pos == 2) {
      style.width = 280;
      style.left = 0;
    } else if (pos == 3) {
      style.width = 770;
      style.left = 0;
    } else if (pos == 4) {
      style.width = 410;
      style.left = 170;
    } else if (pos == 5) {
      style.width = 320;
      style.left = 270;
    } else if (pos == 6) {
      style.width = 410;
      style.left = 0;
    } else if (pos == 7) {
      style.width = 320;
      style.right = 200;
    } else if (pos == 8) {
      style.width = 545;
      style.right = 220;
    } else if (pos == 9) {
      style.width = 110;
      style.left = 0;
    } else if (pos == 10) {
      style.width = 370;
      style.right = 250;
    } else if (pos == 11) {
      style.width = 545;
      style.right = 0;
    } else if (pos == 12) {
      style.width = 110;
      style.left = -50;
    }
    return style;
  }, [dir, pos]);
  return (
    <div
      style={{
        position: "absolute",
        top: -45,
        width: 190,
        ...getStyle,
      }}
    >
      {pos && (
        <SvgaPlayer
          id={"shaR111" + id}
          url={require(`../../assets/svga/sha/sha${pos == 6 ? 4 : pos}.svga`)}
        />
      )}
    </div>
  );
};
