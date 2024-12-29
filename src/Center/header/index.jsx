import React from "react";
import { Carousel } from "antd";
import Clock from "@/components/clock";
import "../index.scss";
const STYLE = {
  fontSize: 24,
  color: "#fff",
  marginRight: 15,
};
const Index = () => {
  return (
    <div className="center_header_box">
      <div className="title">梅山钢铁套筒窑</div>
      <div className="time">
        <div className="clock">
          <Clock />
        </div>
        <div className="weather">
          <Carousel autoplay={true} dots={false} autoplaySpeed={10000}>
            <div>
              <span style={{ ...STYLE, marginLeft: 20 }}>2024-12-23</span>
              <span style={STYLE}>星期四</span>
              <span style={{ ...STYLE, opacity: 0.5 }}>｜</span>
              <span style={{ ...STYLE, color: "#FFAC23" }}>阴天</span>
              <span style={STYLE}>16℃</span>
            </div>
            <div>
              <span style={{ ...STYLE, marginLeft: 20 }}>2024-02-24</span>
              <span style={STYLE}>星期五</span>
              <span style={{ ...STYLE, opacity: 0.5 }}>｜</span>
              <span style={{ ...STYLE, color: "#FFAC23" }}>晴天</span>
              <span style={STYLE}>16℃</span>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Index;
