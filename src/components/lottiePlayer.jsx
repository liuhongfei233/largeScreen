import React, { useEffect } from "react";
import lottie from "lottie-web";
const LottiePlayer = ({ id, url, className, style, autoplay }) => {
  useEffect(() => {
    // 加载并渲染动画
    lottie.loadAnimation({
      container: document.getElementById(id), // 动画容器
      renderer: "svg", // 使用 SVG 渲染
      loop: true, // 是否循环播放
      autoplay: autoplay, // 是否自动播放
      animationData: url, // JSON 动画文件路径
      isSubframeEnabled: false, //提升性能
    });
  }, [autoplay, url, id]);
  return <div id={id} className={className} style={style}></div>;
};

export default LottiePlayer;
