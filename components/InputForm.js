import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../features/chat/messagesSlice";

export default function InputForm() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!text) return;
    const message = {
      id: 1,
      text: text,
    };
    dispatch(addMessage(message));
    setText("");
  };
  return (
    <div className="input_form">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
