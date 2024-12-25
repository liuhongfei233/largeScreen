import React, {useEffect, useRef} from "react";
import flvjs from "flv.js";

const FlvPlayer = (props) => {
  const {
    className,
    style,
    url,
    type = 'flv',
    isLive,
    controls,
    autoPlay,
    muted,
    height,
    width,
    videoProps,
    flvMediaSourceOptions,
    flvConfig,
    onError,
  } = props;

  const videoRef = useRef(null);
  const flvPlayerRef = useRef(null);

  useEffect(() => {
    if (flvjs.isSupported() && videoRef.current) {
      return
      const flvPlayer = flvjs.createPlayer({
        type: type,
        url: url,
        isLive: isLive,
        ...flvMediaSourceOptions,
      }, {
        ...flvConfig,
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();

      const playPromise = flvPlayer.play();
      flvPlayerRef.current = flvPlayer;

      if (playPromise !== undefined) {
        playPromise.catch(() => {
        });
      }

      flvPlayer.on(flvjs.Events.ERROR, (err) => {
        if (onError) {
          onError(err);
        }
      });
    } else {
      console.error('flv.js is not support');
    }

    return () => {
      if (flvPlayerRef.current) {
        flvPlayerRef.current.pause();
        flvPlayerRef.current.unload();
        flvPlayerRef.current.detachMediaElement();
        flvPlayerRef.current.destroy();
      }
    };
  }, [url]);

  return <>
    <video
      ref={videoRef}
      className={className}
      style={style}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      height={height}
      width={width}
      {...videoProps}
      />
  </>
}


export default FlvPlayer;
