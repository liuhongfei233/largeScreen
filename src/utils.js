// 字体、间距自适应
export const fitWidth = (size,defalteWidth = 2560) => {
    let clientWidth = document.documentElement.clientWidth||document.body.clientWidth;
    if (!clientWidth) return size;
    let scale = (clientWidth / defalteWidth);
    // return Number((size*scale).toFixed(3));
    return size;
  } 

export const fitHeight = (size,defalteHeight = 1440) => {
    let clientHeight = document.documentElement.clientHeight||document.body.clientHeight;
    if (!clientHeight) return size;
    let scale = (clientHeight / defalteHeight);
    // return Number((size*scale).toFixed(3));
    return size;
  } 