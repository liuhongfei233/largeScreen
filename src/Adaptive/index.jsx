import React, { useState, useEffect } from "react";
import "./index.scss";

export default function Index({
  children,
  width = "2560",
  height = "1440",
  isShow = true,
}) {
  // 使用useState定义一个状态变量style，并初始化为包含width, height和transform的对象
  const [style, setStyle] = useState({
    width: width + "px",
    height: height + "px",
    transform: "scale(1) translate(-50%, -50%)",
  });
  const Debounce = (fn, t) => {
    const delay = t || 500;
    let timer;
    return function () {
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        fn.apply(args);
      }, delay);
    };
  };
  const getScale = () => {
    const w = window.innerWidth / width;
    const h = window.innerHeight / height;
    return w < h ? w : h;
  };
  const setScale = () => {
    setStyle((item) => ({
      ...item,
      transform: "scale(" + getScale() + ") translate(-50%, -50%)",
    }));
  };
  useEffect(() => {
    setScale();
    window.onresize = Debounce(setScale, 1000);
  }, []);
  return (
    <div className={isShow && "ScreenAdapter"} style={isShow ? style : {}}>
      {children}
    </div>
  );
}
