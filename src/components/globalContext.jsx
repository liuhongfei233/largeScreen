/**
 * 全局上下文组件
 * 使用context管理全局状态
 */
import React, { useEffect, createContext, useState } from "react";
import { useWebSocket } from "./webSocket";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({});
  const { messages, connectWebSocket } = useWebSocket(
    "ws://114.55.89.115:58080/webSocket"
  );
  useEffect(() => {
    connectWebSocket();
  }, []);
  useEffect(() => {
    setState(messages); //存储全局数据
  }, [messages]);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
