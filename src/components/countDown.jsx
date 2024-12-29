import React, { useEffect, useState } from "react";
import { Progress } from "antd";

export default ({ total, onComplete }) => {
  const [num, setNum] = useState(total);
  useEffect(() => {
    let intervalId;
    const countdown = () => {
      setNum((prevNum) => {
        if (prevNum > 0) {
          return prevNum - 1;
        }
        clearInterval(intervalId);
        onComplete && onComplete();
        return 0;
      });
    };
    intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Progress
      type="circle"
      percent={(num / total) * 100}
      size={55}
      format={() => (
        <span style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
          {num}s
        </span>
      )}
    />
  );
};
