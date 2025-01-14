import React, { useContext, useState } from "react";
import Player from "@/components/player";
import LottiePlayer from "@/components/lottiePlayer";
import TR from "@/components/tr";
import CountDown from "@/components/countDown";
import { GlobalContext } from "@/components/globalContext";
import YaoTop from "@/components/yaoTop";
import SvgaPlayer from "@/components/svgaPlayer";
import Dou from "@/components/dou";
import Car from "@/components/car";
const STYLE = {
  width: 80,
  height: "31px",
  lineHeight: "31px",
  background: "#B0D3D6",
  boxShadow: "inset 0px 0px 10px 0px rgba(255,255,255,0.75)",
  border: "1px solid #FFFFFF",
  fontWeight: "bold",
  fontSize: 20,
  color: "#0B182B",
  textAlign: "right",
  paddingRight: 6,
  boxSizing: "border-box",
};

const Center = () => {
  const { state } = useContext(GlobalContext);
  const data = state?.yao3 || {};
  const cameras = state?.cameras || [];
  const common = state?.common || {};
  return (
    <div className="yao" style={{ marginRight: 35 }}>
      <div className="yao_main">
        <div className="yao_content">
          <img
            className="yao_img"
            src={require("../../assets/yao/1.png")}
            alt=""
          />
          <img
            className="yao_img"
            src={require("../../assets/yao/3.png")}
            alt=""
          />
          <img
            className="yao_img"
            src={require("../../assets/yao/4.png")}
            alt=""
          />
          <LottiePlayer
            id="el5"
            autoplay={
              data["1hlqfjyx"] ||
              data["2hlqfjyx"] ||
              data["gwfjyx"] ||
              data["ccfjyx"] ||
              data["1hqdfjyx"] ||
              data["2hqdfjyx"]
            }
            url={require("@/assets/yao/el1.json")}
            className="yao_img"
            style={{ zIndex: 10 }}
          />
          <LottiePlayer
            id="el6"
            autoplay={
              data["1hlqfjyx"] ||
              data["2hlqfjyx"] ||
              data["gwfjyx"] ||
              data["ccfjyx"] ||
              data["1hqdfjyx"] ||
              data["2hqdfjyx"]
            }
            url={require("@/assets/yao/el2.json")}
            className="yao_img"
            style={{ zIndex: 20 }}
          />
          <LottiePlayer
            id="fan9"
            autoplay={data["1hlqfjyx"]}
            url={require("@/assets/yao/fan1.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          <LottiePlayer
            id="fan10"
            autoplay={data["2hlqfjyx"]}
            url={require("@/assets/yao/fan2.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          <LottiePlayer
            id="fan11"
            autoplay={data["gwfjyx"]}
            url={require("@/assets/yao/fan3.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          <LottiePlayer
            id="fan12"
            autoplay={data["ccfjyx"]}
            url={require("@/assets/yao/fan4.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          <LottiePlayer
            id="fan1212"
            autoplay={data["1hqdfjyx"]}
            url={require("@/assets/yao/fan5.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          <LottiePlayer
            id="fan1213"
            autoplay={data["2hqdfjyx"]}
            url={require("@/assets/yao/fan6.json")}
            className="yao_img"
            style={{ zIndex: 21 }}
          />
          {data?.ydzmkdw && (
            <SvgaPlayer
              id="Inside"
              style={{
                height: 200,
                position: "absolute",
                left: 450,
                top: 50,
              }}
              url={require("../../assets/svga/stone/Inside.svga")}
            />
          )}
        </div>
      </div>
      {/* 运输小车 */}
      <Car
        up={data?.jyxcssyx}
        down={data?.jyxcxjyx}
        shou={data?.cldzmkdw}
        id="3"
      />
      {/* 窑顶布料器 */}
      <YaoTop data={data} />
      <div className="liangdou">
        <Dou
          shou={common["3yylczdgljyx"]}
          open={data?.cldzmkdw}
          data={data?.cldzlfk}
          alarm={data?.cldzlfk_alarm}
          id="3"
        />
      </div>
      <div className="player">
        <Player
          width={238}
          height={134}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[10]}
        />
        <Player
          width={238}
          height={134}
          style={{ marginTop: 10 }}
          controls={true}
          autoPlay={true}
          muted={true}
          url={cameras[11]}
        />
      </div>
      <div className="CEMS">
        <div className="CEMS_main">
          <div
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            CEMS系统
          </div>
          <TR
            name="温度"
            content={data?.cemswd}
            alarm={data?.cemswd_alarm}
            unit="℃"
          />
          <TR
            name="氧量"
            content={data?.cemsyhl}
            alarm={data?.cemsyhl_alarm}
            unit="%"
          />
          <TR
            name="粉尘"
            content={data?.cemsfc}
            alarm={data?.cemsfc_alarm}
            unit="mg/Nm"
          />
          <TR
            name="折算"
            content={data?.cemsfczsz}
            alarm={data?.cemsfczsz_alarm}
            unit="mg/Nm"
          />
          <TR
            name="压力"
            content={data?.cemsyl}
            alarm={data?.cemsyl_alarm}
            unit="kPa"
          />
          <TR
            name="流速"
            content={data?.cemsls}
            alarm={data?.cemsls_alarm}
            unit="m/min"
          />
        </div>
        <TR content={data?.hrqckwd} alarm={data?.hrqckwd_alarm} unit="℃" />
      </div>
      <div className="yao_left">
        <div
          style={{
            fontSize: 18,
            color: "#fff",
          }}
        >
          上℃
        </div>
        <TR name="1" content={data?.sszwd1} alarm={data?.sszwd1_alarm} />
        <TR name="2" content={data?.sszwd2} alarm={data?.sszwd2_alarm} />
        <TR name="3" content={data?.sszwd3} alarm={data?.sszwd3_alarm} />
        <TR name="4" content={data?.sszwd4} alarm={data?.sszwd4_alarm} />
        <TR name="5" content={data?.sszwd5} alarm={data?.sszwd5_alarm} />
        <TR name="6" content={data?.sszwd6} alarm={data?.sszwd6_alarm} />
      </div>
      <div className="yao_right">
        <TR
          content={data?.qdfjhgwd}
          alarm={data?.qdfjhgwd_alarm}
          unit="℃"
          style={{ marginBottom: 20, marginLeft: 36 }}
        />
        <TR
          content={data?.hrqrkwd}
          alarm={data?.hrqrkwd_alarm}
          unit="℃"
          style={{ marginBottom: 10, marginLeft: 36 }}
        />
        <TR
          name="下1"
          content={data?.xszwd1}
          alarm={data?.xszwd1_alarm}
          unit="℃"
        />
        <TR
          name="下2"
          content={data?.xszwd2}
          alarm={data?.xszwd2_alarm}
          unit="℃"
        />
        <TR
          name="下3"
          content={data?.xszwd3}
          alarm={data?.xszwd3_alarm}
          unit="℃"
        />
        <TR
          name="下4"
          content={data?.xszwd4}
          alarm={data?.xszwd4_alarm}
          unit="℃"
        />
        <TR
          name="下5"
          content={data?.xszwd5}
          alarm={data?.xszwd5_alarm}
          unit="℃"
        />
        <TR
          name="下6"
          content={data?.xszwd6}
          alarm={data?.xszwd6_alarm}
          unit="℃"
        />
      </div>
      <div className="yao_bottom_left">
        <TR content={data?.chkwd1} alarm={data?.chkwd1_alarm} unit="℃" />
        <div style={{ display: "flex", alignItems: "end" }}>
          <div>
            <TR content={data?.chkwd2} alarm={data?.chkwd2_alarm} />
            <TR content={data?.chkwd3} alarm={data?.chkwd3_alarm} />
            <TR content={data?.chkwd4} alarm={data?.chkwd4_alarm} />
          </div>
          <div>
            <TR content={data?.chkwd5} alarm={data?.chkwd5_alarm} />
            <TR content={data?.chkwd6} alarm={data?.chkwd6_alarm} />
          </div>
        </div>
      </div>
      <div className="yao_bottom_right">
        <TR content={data?.mqhgyl} alarm={data?.mqhgyl_alarm} unit="kpa" />
        <TR
          content={data?.mqzgll || "-"}
          alarm={data?.mqzgll_alarm}
          unit="m3/h"
        />
      </div>
      <div className="yao_right_bottom">
        <div style={{ marginRight: 10 }}>
          <TR content={data?.ydfy} alarm={data?.ydfy_alarm} unit="kpa" />
          <TR content={data?.gwfjdl} alarm={data?.gwfjdl_alarm} unit="A" />
          <TR content={data?.gwfjpl} alarm={data?.gwfjpl_alarm} unit="Hz" />
        </div>
        <div>
          <TR content={data?.ccrkfy} alarm={data?.ccrkfy_alarm} unit="kPa" />
          <TR content={data?.ccrkwd} alarm={data?.ccrkwd_alarm} unit="℃" />
        </div>
      </div>
      <div className="yao_right_bottom2">
        <TR content={data?.ccfjdl} alarm={data?.ccfjdl_alarm} unit="A" />
      </div>
      <div className="yao_top_right">
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#fff",
            marginBottom: 10,
          }}
        >
          称重量
        </div>
        <TR content={data?.cldzlfk} alarm={data?.cldzlfk_alarm} unit="kg" />
        <TR content={data?.jypl} alarm={data?.jypl_alarm} unit="HZ" />
        <TR content={data?.jydl} alarm={data?.jydl_alarm} unit="A" />
        <TR content={data?.jywzfk} alarm={data?.jywzfk_alarm} unit="M" />
      </div>
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <TR content={data?.lfyl} alarm={data?.lfyl_alarm} unit="kpa" />
        <TR content={data?.lfll} alarm={data?.lfll_alarm} unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 538, bottom: 6 }}>
        <TR content={data?.ydlqfll} alarm={data?.ydlqfll_alarm} unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 800, bottom: 6 }}>
        <TR content={data?.qdfjyl} alarm={data?.qdfjyl_alarm} unit="kpa" />
        <TR content={data?.qdfjll} alarm={data?.qdfjll_alarm} unit="m3/h" />
      </div>
      <div style={{ position: "absolute", left: 450, bottom: 10 }}>
        {data?.ydzdgljyx ? (
          <img
            style={{ width: 87, height: 85, position: "relative", zIndex: 20 }}
            src={require("../../assets/left/dou_open.png")}
            alt=""
          />
        ) : (
          <img
            style={{ width: 87, height: 85, position: "relative", zIndex: 20 }}
            src={require("../../assets/left/dou_close.png")}
            alt=""
          />
        )}
        {data?.ydzdgljyx && (
          <SvgaPlayer
            style={{ width: 50, position: "absolute", left: 20, bottom: -45 }}
            id={"dou44444"}
            url={require(`../../assets/svga/fallingS.svga`)}
          />
        )}
      </div>
      {/* 出灰停止倒计时 */}
      {data["zdchtdjs"] && (
        <div style={{ position: "absolute", left: 390, bottom: 0 }}>
          <CountDown id="3" total={data["zdchtdjs"]} />
        </div>
      )}
      <div style={{ position: "absolute", left: 398, top: 245 }}>
        <img
          style={{ width: 52, height: 12 }}
          src={require("../../assets/fire-normal.png")}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", left: 535, top: 363 }}>
        <img
          style={{ width: 52, height: 12 }}
          src={require("../../assets/fire-normal.png")}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", left: 572, top: 75 }}>
        <TR content={data?.tcsx ? "上限" : "下限"} />
      </div>
      <div style={{ position: "absolute", left: 550, top: 110 }}>
        <img
          width={224}
          height={64}
          src={require(`../../assets/${
            data?.ydwd_alarm ? "alarm" : "tempNormal"
          }.png`)}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", left: 688, top: 107 }}>
        <TR content={data?.ydwd} alarm={data?.ydwd_alarm} unit="℃" />
      </div>
      <div style={{ position: "absolute", left: 452, top: 242 }}>
        <div style={STYLE}>{data?.xhqtwd1}</div>
        <div style={STYLE}>{data?.xhqtwd2}</div>
        <div style={STYLE}>{data?.xhqtwd3}</div>
        <div style={STYLE}>{data?.xhqtwd4}</div>
        <div style={STYLE}>{data?.xhqtwd5}</div>
        <div style={STYLE}>{data?.xhqtwd6}</div>
      </div>
    </div>
  );
};
export default Center;
