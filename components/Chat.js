import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { addMessage } from "../features/chat/messagesSlice";
import { setUser } from "../features/chat/userSlice";

export default function Chat({ socket }) {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);
  const chat = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.on("conn", () => {
      console.log("conn");
    });
    socket?.on("message", (message) => {
      console.log(message)
      dispatch(addMessage(message));
    });
    socket?.on("role_changed", (data) => {
      dispatch(setUser(data));
    });
    return () => {
      socket.off("message");
      socket.off("conn");
    };
  }, [socket]);

  React.useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, [messages]);

  const banUser = (user) => {
    socket.emit("ban_user", { user: user }, (response) => {
      if (response.status != 200) {
        return alert(response.message);
      }
    });
  };
  const makeModerator = (user) => {
    socket.emit("make_moderator", { user: user }, (response) => {
      if (response.status != 200) {
        return alert(response.message);
      }
    });
  };

  return (
    <div className="chat" ref={chat}>
      {messages.map((message, index) => {
        const isMe = message.sender.token == user.token;
        return (
          <Message
            key={index}
            message={message}
            isMe={isMe}
            banUser={() => banUser(message.sender)}
            makeModerator={() => makeModerator(message.sender)}
          />
        );
      })}
    </div>
  );
}
