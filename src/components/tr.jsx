import React from "react";
import "./index.scss";

export default ({ name, content, unit, style }) => {
  return (
    <div className="tr" style={style}>
      {name && <div className="tr_name">{name}</div>}
      <div className="tr_content">{content}</div>
      {unit && <div className="tr_unit">{unit}</div>}
    </div>
  );
};
