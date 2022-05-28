import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { addMessage } from "../features/chat/messagesSlice";
import { setUser } from "../features/chat/userSlice";
import Popup from "./Popup";

export default function Chat({ socket }) {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);
  const chat = React.useRef();
  const banPopup = React.useRef();
  const dispatch = useDispatch();

  const [banTime, setBanTime] = React.useState("");
  const [targetUser, setTargetUser] = React.useState({});

  React.useEffect(() => {
    socket?.on("message", (message) => {
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
    banPopup?.current.toggle();
    setTargetUser(user);
  };
  const submitBan = (e) => {
    e.preventDefault();
    console.log('subm')
    socket.emit("ban_user", { user: targetUser, time: banTime }, (response) => {
      if (response.status != 200) {
        return alert(response.message);
      }
    });
    banPopup?.current.toggle();
  };
  const makeModerator = (user) => {
    socket.emit("make_moderator", { user: user }, (response) => {
      if (response.status != 200) {
        return alert(response.message);
      }
    });
  };

  return (
    <>
      {user.role != "user" && (
        <Popup ref={banPopup}>
          <form>
            <input
              placeholder="Время блокировки"
              onChange={(e) => setBanTime(e.target.value)}
              value={banTime}
            />
            <input type="submit" value="Забанить" onClick={submitBan} />
          </form>
        </Popup>
      )}
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
    </>
  );
}
