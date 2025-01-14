import React, { useEffect, useRef, useState } from "react";
import flvjs from "flv.js";
import { fitWidth, fitHeight } from '@/utils';
import { use } from "react";

const FlvPlayer = (props) => {
  const {
    className,
    style,
    url,
    type = 'flv',
    controls,
    autoPlay,
    muted,
    height,
    width,
  } = props;

  const videoRef = useRef(null);
  const flvPlayerRef = useRef(null);
  const [outline, setOutline] = useState(false);
  const [lastDecodedFrames,setLastDecodedFrames]=useState(0);
  const errTimeRef=useRef(0);


  let mounted ; // 标志位，确保组件已挂载
  const createPlayer=()=>{
    mounted=true;
    const flvPlayer = flvjs.createPlayer({
      type: type,
      // url: 'http://pull-demo.volcfcdnrd.com/live/st-4536523_yzmhde.flv',
      url: url,
      isLive: true,
      hasAudio:false,
      enableWorker: true, //启用分离线程
    }, {
        enableStashBuffer: false, //关闭IO隐藏缓冲区
        reuseRedirectedURL: true, //重用301/302重定向url，用于随后的请求，如查找、重新连接等。
        autoCleanupSourceBuffer: true, //自动清除缓存
    });
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
    flvPlayerRef.current = flvPlayer;
    flvPlayer.on(flvjs.Events.ERROR, async(errType, errDetail) =>{ //播放失败重新播放
      console.log(errType, errDetail);
      if(errTimeRef.current<3){ //播放失败次数小于3 就重新创建播放实例
        await cleanupFlvPlayer();
        createPlayer();
        errTimeRef.current++;
      }else{ //播放失败了
        setOutline(true);
        cleanupFlvPlayer();
        errTimeRef.current=0
      }
    })
    // 视频断流
    flvPlayer.on("statistics_info", function (res) {
      if(lastDecodedFrames === 0){
          setLastDecodedFrames(res.decodedFrames);
          return
      }
      if(lastDecodedFrames != res.decodedFrames){
        setLastDecodedFrames(res.decodedFrames);
      }else{
        setLastDecodedFrames(0);
        cleanupFlvPlayer();
        createPlayer()
      }
  });
  }
  
  const cleanupFlvPlayer = async (player)=> {
      if (flvPlayerRef.current) {
        flvPlayerRef.current.pause();
        flvPlayerRef.current.unload();
        flvPlayerRef.current.detachMediaElement();
        flvPlayerRef.current.destroy();
      }
  }
  useEffect(() => {
    if (flvjs.isSupported() && videoRef.current&&url){
      createPlayer();
    };
    return () => {
      if (mounted && flvPlayerRef.current) {
        cleanupFlvPlayer(flvPlayerRef.current);
      }
      mounted = false; // 组件卸载时设置标志位为 false
    };
  }, [url]);

  return (
    <div style={{ position: 'relative',display: 'flex', flexWrap: 'wrap',width:width }}>
      {outline && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          zIndex: 9999
        }}>视频离线...</div>
      )}
      <video
        ref={videoRef}
        className={className}
        style={{objectFit:'fill',...style}}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        height={fitHeight(height)}
        width={fitWidth(width)}
      /> 
    </div>
  );
};

export default FlvPlayer;