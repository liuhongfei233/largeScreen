import React, { useContext } from "react";
import Player from "@/components/player";
// import Player from "@/components/videoPlayer";
import { GlobalContext } from "@/components/globalContext";
import "./index.scss";
const Cameras = () => {
  const { state } = useContext(GlobalContext);
  const cameras = state?.cameras || [];
  return (
    <div className="left_bottom_content">
      {/* <div className="carmeraBox"> */}
      <Player
        width={368}
        height={270}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[0]}
      />
      {/* </div> */}
      {/* <div className="carmeraBox"> */}
      <Player
        width={368}
        height={270}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[1]}
      />
      {/* </div> */}
      {/* <div className="carmeraBox"> */}
      <Player
        width={368}
        height={270}
        controls={true}
        autoPlay={true}
        muted={true}
        url={cameras[2]}
      />
      {/* </div> */}
    </div>
  );
};
export default Cameras;
