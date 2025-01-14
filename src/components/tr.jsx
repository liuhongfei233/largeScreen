import React from "react";
import "./index.scss";
/*
 * @param name: 标题
 * @param content: 内容
 * @param unit: 单位
 * @param style: 样式
 * @param alarm: 是否告警
 */
export default ({ name, content, unit, style, alarm, type }) => {
  return (
    <div className="tr" style={style}>
      {name && <div className="tr_name">{name}</div>}
      <div className={alarm ? "alarm-bg" : "tr_content"}>{content || 0}</div>
      {unit && <div className="tr_unit">{unit}</div>}
    </div>
  );
};
