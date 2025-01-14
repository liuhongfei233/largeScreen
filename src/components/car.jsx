import React, { useEffect, useState } from "react";
import SvgaPlayer from "./svgaPlayer";

/**
 * @param {*up} 小车上行
 * @param {*down} 小车下行
 * @param {*shou} 小车接料
 * @param {*id} svgaid
 */
export default ({ up, down, shou, id }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (up) setUrl("carUp");
    if (down) setUrl("carDown");
    if (shou) setUrl("");
  }, [up, down, shou]);
  return (
    <div>
      {shou ? (
        <img
          width={344}
          height={240}
          src={require("../assets/carStop.png")}
          style={{ position: "absolute", left: 165, top: -25 }}
        />
      ) : (
        <img
          width={344}
          height={240}
          src={require("../assets/line.png")}
          style={{ position: "absolute", left: 165, top: -25 }}
        />
      )}

      {url && (
        <SvgaPlayer
          id={"car" + id}
          loops={url == "carPour" ? 0 : 1}
          onFinish={() => {
            if (up) {
              //小车上行完成时回调
              setUrl("carPour");
            }
          }}
          style={{
            height: url == "carPour" ? 96 : 240,
            width: url == "carPour" ? 96 : 344,
            position: "absolute",
            left: url == "carPour" ? 418 : 168,
            top: -26,
          }}
          url={require(`../assets/svga/${url}.svga`)}
        />
      )}
    </div>
  );
};
