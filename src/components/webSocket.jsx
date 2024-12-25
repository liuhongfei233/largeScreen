import { useCallback, useRef, useState } from "react";

export function useWebSocket(
  url,
  onMessage,
  onError,
  token // 新增 token 参数
) {
  const [isConnected, setIsConnected] = useState(false); //连接状态
  const [reconnectAttempts, setReconnectAttempts] = useState(0); //连接次数
  const [messages, setMessages] = useState([]); // 用于存储消息
  const websocketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null); //重连定时器
  //手动关闭状态
  const isManualClose = useRef(false); // 改用 useRef 防止异步更新问题

  // 最大重连次数
  const maxReconnectAttempts = 5;
  // 初始重连延迟时间（毫秒）
  const initialReconnectDelay = 1000;

  // 连接 WebSocket
  const connectWebSocket = useCallback(() => {
    isManualClose.current = false; // 每次连接时重置手动关闭状态

    // 如果有 token，则通过 URL 查询参数传递
    const wsUrl = token ? `${url}?token=${token}` : url;

    websocketRef.current = new WebSocket(wsUrl);

    websocketRef.current.onopen = () => {
      console.log("WebSocket连接成功");
      setIsConnected(true);
      setReconnectAttempts(0); // 连接成功后重置重连次数
    };

    websocketRef.current.onmessage = (event) => {
      console.log("🚀 ~ connectWebSocket ~ event:", event);
      onMessage && onMessage(event);
      setMessages((prevMessages) => [...prevMessages, event.data]); // 将消息保存到状态
    };

    websocketRef.current.onerror = (event) => {
      console.error("WebSocket发生错误:", event);
      if (onError) onError(event); // 如果提供了 onError 回调，调用它
    };

    websocketRef.current.onclose = () => {
      console.log("WebSocket连接关闭");
      setIsConnected(false);

      // 判断是否需要重连，只有在非手动断开时才尝试重连
      if (isManualClose.current) {
        console.log("WebSocket手动关闭，不进行重连");
        return; // 终止重连逻辑
      }

      if (reconnectAttempts < maxReconnectAttempts) {
        const delay = initialReconnectDelay * Math.pow(2, reconnectAttempts); // 指数级递增延迟
        console.log(`Reconnecting in ${delay / 1000} seconds...`);
        reconnectTimeoutRef.current = window.setTimeout(() => {
          setReconnectAttempts((prev) => prev + 1);
          connectWebSocket(); // 重试连接
        }, delay);
      } else {
        console.error("WebSocket重连失败次数过多，停止重连");
      }
    };
  }, [url, token, onMessage, onError, reconnectAttempts]);

  // 手动断开 WebSocket 连接
  const disconnectWebSocket = useCallback(() => {
    if (websocketRef.current) {
      console.log("手动断开 WebSocket 连接");
      isManualClose.current = true; // 使用 ref 直接设置为手动关闭
      websocketRef.current.close();
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current); // 清除任何重连的定时器
      }
    }
  }, []);

  // 发送消息
  const sendMessage = useCallback((message) => {
    if (
      websocketRef.current &&
      websocketRef.current.readyState === WebSocket.OPEN
    ) {
      websocketRef.current.send(message);
    } else {
      console.warn("WebSocket is not open.");
    }
  }, []);

  return {
    isConnected, // 是否已连接
    sendMessage, // 发送消息的函数
    disconnectWebSocket, // 手动断开连接的函数
    connectWebSocket, // 手动连接函数
    messages, // 返回存储的消息
  };
}
