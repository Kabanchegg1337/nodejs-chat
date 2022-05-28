import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user);
  return (
    <header className="header">
      {user.name && (
        <div className="user">
          <span>{user.name}</span>
          <div className="icon"></div>
        </div>
      )}
    </header>
  );
}
