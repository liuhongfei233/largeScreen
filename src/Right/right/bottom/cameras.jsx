import React, { useContext } from "react";
import Player from "@/components/player";
import VideoPlayer from "@/components/videoPlayer";
import { GlobalContext } from "@/components/globalContext";
import "../../index.scss";
const Cameras = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  return (
    <div className="right_bottom_content">
      <div>
        <Player
          width={368}
          height={270}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[16]}
        />
      </div>
      <div className="carmeraBox">
        <Player
          width={368}
          height={270}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[17]}
        />
      </div>
      <div className="carmeraBox">
        <Player
          width={368}
          height={270}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[18]}
        />
      </div>
    </div>
  );
};
export default Cameras;
