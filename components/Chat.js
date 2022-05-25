import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function Chat() {
  const messages = useSelector((state) => state.messages);
  const chat = React.useRef();

  React.useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat" ref={chat}>
      {messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </div>
  );
}
