import React from "react";
import "./index.scss";

const BoxTitle = ({ title, desc, icon }) => {
  return (
    <div className="titleBox">
      {icon}
      <span className="title" style={{ marginLeft: icon ? 18 : 30 }}>
        {title}
      </span>
      {desc && <span className="desc"> / {desc}</span>}
    </div>
  );
};
export default BoxTitle;
