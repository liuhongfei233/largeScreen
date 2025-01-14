import React, { useEffect, useRef } from "react";
import "./index.scss";

export const VideoPlayer = ({ url, width, height }) => {
  const jessibucaRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    create();
  }, [url]);
  const create = () => {
    jessibucaRef.current = new window.Jessibuca({
      container: playerRef.current,
      videoBuffer: 0.2, // 缓存时长
      isResize: false,
      text: "",
      loadingText: "加载中",
      debug: true,
      // showBandwidth: true, // 显示网速
      isFlv: true,
      hasAudio: false,
      // useMSE: true,
      // autoWasm: true,
      controlAutoHide: true,
      operateBtns: {
        fullscreen: true,
        screenshot: true,
        play: true,
        audio: false,
      },
      forceNoOffscreen: false,
      isNotMute: false,
    });
    if (url) {
      jessibucaRef.current
        .play("http://pull-demo.volcfcdnrd.com/live/st-4536523_yzmhde.flv")
        .then(() => {
          console.log("播放成功");
        });
    }
    jessibucaRef.current.on("error", function (error) {
      console.log("🚀 ~ error:", error, jessibucaRef.current);
      // if (error === jessibucaRef.current.ERROR.fetchError) {
      //   //
      // } else if (error === jessibucaRef.current.ERROR.webcodecsH265NotSupport) {
      //   //
      // }
    });
  };
  const destroy = () => {
    if (jessibucaRef.current) {
      jessibucaRef.current.destroy();
    }
  };
  return (
    <div
      className="videoPlayer"
      style={{
        background: "rgba(13, 14, 27)",
      }}
    >
      <div
        style={{
          width: width,
          height: height + 38,
        }}
      >
        <div ref={playerRef}></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
