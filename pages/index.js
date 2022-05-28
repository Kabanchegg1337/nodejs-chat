import Chat from "../components/Chat";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import { io } from "socket.io-client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/chat/userSlice";
import LoginForm from "../components/LoginForm";

const socket = io(":3001");

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const login = name => {
    socket.emit(
      "login",
      {
        name: name,
      },
      (response) => {
        dispatch(setUser(response));
      }
    );
  }
  return (
    <div className="container">
      {!user.token && (<LoginForm onSubmit={login} />)}
      <Header />
      <Chat socket={socket} />
      <InputForm socket={socket} />
    </div>
  );
}
