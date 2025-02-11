import React, { useEffect } from "react";
import SVGA from "svgaplayerweb";
/**
 *
 * @param {*id} 画布id唯一
 * @param {*url} 播放地址
 * @param {*className} className
 * @param {*style} 样式
 * @param {*onFinish} 播放结束回调
 * @param {*loops} 播放次数0 无限循环 默认0
 * @returns
 */
const SvgaPlayer = ({ id, url, className, style, onFinish, loops = 0 }) => {
  useEffect(() => {
    bofang();
  }, [url, loops]);
  const bofang = () => {
    var player = new SVGA.Player(`#${id}`); //创建实例
    var parser = new SVGA.Parser(`#${id}`); //是否兼容
    parser.load(url, function (videoItem) {
      //加载并回调
      player.setVideoItem(videoItem);
      player.loops = loops; //播放次数
      player.startAnimation(); //开始播放动画
      player.onFinished(() => {
        onFinish && onFinish();
      });
      player.clearsAfterStop = false; //停止播放时是否清空画布
      // clear(): 清空动画画布。
      // startAnimation() //开始播放动画。
      // pauseAnimation(): 暂停播放动画。
      // stopAnimation(reset)：停止动画播放，并可选择是否重置到初始状态。
      // stepToFrame(frame, andPlay): 跳转到指定帧进行播放，frame 是目标帧的索引，andPlay 表示是否继续播放。
      // on(event, callback): 添加事件监听器，常见事件包括 onFinished（动画播放完毕时触发）、onFrame（动画帧更新时触发）等。
    });
  };
  return <div id={id} className={className} style={style}></div>;
};

export default SvgaPlayer;
