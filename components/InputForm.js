import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/chat/messagesSlice";

export default function InputForm({socket}) {
  const user = useSelector(state => state.user);
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!text) return;
    const message = {
      id: 1,
      text: text,
      sender: user
    };
    
    socket.emit('message', message, response => {
      if (response.status != 200){
        return alert(response.message);
      }
    });
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
