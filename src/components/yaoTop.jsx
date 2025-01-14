import React, { useEffect, useState } from "react";
/**
 * 窑口料器位置限位公共方法
 * @param {*} data 窑数据
 */
export default ({ data }) => {
  const [num, setNum] = useState(7);
  useEffect(() => {
    if (data?.blqwzxw1) {
      //1#窑布料器位置限位1
      setNum(1);
    } else if (data?.blqwzxw2) {
      //1#窑布料器位置限位2
      setNum(2);
    } else if (data?.blqwzxw3) {
      //1#窑布料器位置限位3
      setNum(3);
    } else if (data?.blqwzxw4) {
      //1#窑布料器位置限位4
      setNum(4);
    } else if (data?.blqwzxw5) {
      //1#窑布料器位置限位5
      setNum(5);
    } else if (data?.blqwzxw6) {
      //1#窑布料器位置限位6
      setNum(6);
    } else {
      //1#窑布料器位置限位7
      setNum(7);
    }
  }, [data]);
  return (
    <div style={{ position: "absolute", left: 460, top: 0 }}>
      <img
        width={62}
        height={112}
        src={require(`@/assets/yaoTop/${num}.png`)}
        alt=""
      />
    </div>
  );
};
