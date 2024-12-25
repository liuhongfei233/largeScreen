import { useEffect, useRef, useState } from "react";
import "./index.scss";

const ScrollTable = (props) => {
  const {
    dataSource,
    // 滚动速度，值越大，滚动越慢
    speed = 50, // 单位是毫秒
    scrollStep = 2, // 滚动步长
  } = props;

  const [isScrolle, setIsScrolle] = useState(dataSource.length >= 10);

  const warper = useRef();
  const childDom1 = useRef();
  const childDom2 = useRef();
  const accumulatedScroll = useRef(0); // 累积滚动距离

  // 开始滚动
  useEffect(() => {
    if (!childDom2.current || !childDom1.current) return;

    // 十条以上数据才开始滚动
    if (dataSource.length >= 10) {
      //多拷贝一层，让它无缝滚动
      childDom2.current.innerHTML = childDom1.current.innerHTML;
    }

    let animationFrameId = null;
    let lastTime = 0;

    const scrollTable = (currentTime) => {
      if (isScrolle) {
        if (currentTime - lastTime >= speed) {
          lastTime = currentTime;
          accumulatedScroll.current += scrollStep;

          if (accumulatedScroll.current >= 1) {
            if (
              warper.current.scrollTop >=
              childDom1.current.scrollHeight - 1 //临界点可能不会精确地触发所以需要减去重合的部分，如果出现闪动可以修改这个数据，一般调整几个像素就可以达到肉眼看不到跳动的程度了
            ) {
              warper.current.scrollTop = -childDom1.current.scrollHeight;
            } else {
              warper.current.scrollTop += Math.floor(accumulatedScroll.current);
              accumulatedScroll.current -= Math.floor(
                accumulatedScroll.current
              );
            }
          }
        }
        animationFrameId = requestAnimationFrame(scrollTable);
      }
    };

    if (isScrolle) {
      animationFrameId = requestAnimationFrame(scrollTable);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isScrolle]);

  const hoverHandler = (flag) => {
    if (dataSource.length >= 10) {
      setIsScrolle(flag);
    }
  };

  return (
    <>
      <div
        className="parent"
        ref={warper}
        onMouseOver={() => hoverHandler(false)}
        onMouseLeave={() => hoverHandler(true)}
      >
        <div className="child" ref={childDom1}>
          {dataSource.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  height: "76px",
                  lineHeight: "76px",
                  color: "#fff",
                  fontSize: 24,
                  background: index % 2 != 0 && "rgba(255, 255, 255, 0.06)",
                  border: index % 2 != 0 && "2px solid rgba(176,211,255,0.3)",
                }}
                key={item.key}
              >
                <div style={{ width: "15%", fontWeight: 800, marginLeft: 51 }}>
                  {item.key}
                </div>
                <div style={{ width: "40%" }}>{item.content}</div>
                <div style={{ width: "20%" }}>{item.name}</div>
                <div style={{ width: "25%" }}>{item.time}</div>
              </div>
            );
          })}
        </div>
        <div className="child" ref={childDom2}></div>
      </div>
    </>
  );
};

export default ScrollTable;
