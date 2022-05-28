import Chat from "../components/Chat";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import { io } from "socket.io-client";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/chat/userSlice";

const socket = io("http://localhost:3001/");

export default function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    socket.emit(
      "login",
      {
        name: "Denis",
      },
      (response) => {
        dispatch(setUser(response));
      }
    );
  }, []);
  return (
    <div className="container">
      <Header />
      <Chat socket={socket} />
      <InputForm socket={socket} />
    </div>
  );
}
