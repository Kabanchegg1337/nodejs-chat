import React from "react";
import ban from "../img/ban.svg";
import moderator from "../img/moderator.svg";

export default function Message({ message, isMe, banUser, makeModerator }) {
  const renderBadge = () => {
    if (message.sender.role === "moderator") return (<div className="badge moderator">Модератор</div>)
    if (message.sender.role === 'admin') return (<div className="badge admin">Администратор</div>)
    return;
  }

  return (
    <div className={`message ${isMe ? "owner" : ""}`}>
      {!isMe && (
        <div className="user">
          <div className="name">{message.sender.name}</div>
          {renderBadge()}
        </div>
      )}
      <div className="content">{message.text}</div>
      {!isMe && (
        <div className="buttons">
          <button onClick={banUser}>
            <img src={ban.src} />
          </button>
          <button onClick={makeModerator}>
            <img src={moderator.src} />
          </button>
        </div>
      )}
    </div>
  );
}
