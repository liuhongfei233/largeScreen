import React, { useContext } from "react";
import Player from "@/components/player";
import { GlobalContext } from "@/components/globalContext";
import "./index.scss";
const Cameras2 = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  return (
    <div className="left_bottom_content">
      <div className="carmeraBox">
        <Player
          width={368}
          height={270}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[3]}
        />
      </div>
      {/* <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live/test.live.flv"
        />
        <div className="carmeraBox_title">5#窑视频窗口</div>
      </div>
      <div className="carmeraBox">
        <Player
          className="carmeraBox_content"
          controls={true}
          autoPlay={true}
          muted={true}
          url="https://114.55.89.115:8443/live/test.live.flv"
        />
        <div className="carmeraBox_title">6#窑视频窗口</div>
      </div> */}
    </div>
  );
};
export default Cameras2;
