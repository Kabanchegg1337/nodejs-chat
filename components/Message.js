import React from "react";
import { useSelector } from "react-redux";
import ban from "../img/ban.svg";
import moderator from "../img/moderator.svg";

export default function Message({ message, isMe, banUser, makeModerator }) {
  const user = useSelector((state) => state.user);
  const renderBadge = () => {
    if (message.sender.role === "moderator")
      return <div className="badge moderator">Модератор</div>;
    if (message.sender.role === "admin")
      return <div className="badge admin">Администратор</div>;
    return;
  };

  return (
    <div className={`message ${isMe ? "owner" : ""}`}>
      {!isMe && (
        <div className="user">
          <div className="name">{message.sender.name}</div>
          {renderBadge()}
        </div>
      )}
      <div className="content">{message.text}</div>
      {!isMe && user.role != "user" && (
        <div className="buttons">
          <button onClick={banUser}>
            <img src={ban.src} />
          </button>
          {user.role === "admin" && (
            <button onClick={makeModerator}>
              <img src={moderator.src} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
