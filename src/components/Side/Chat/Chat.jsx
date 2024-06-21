import ChatMessage from "./ChatMessage/ChatMessage";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "components/Side/Chat/chatSlice";
import getTimeString from "src/getTimeString";

export default function Chat({ player }) {
  const playerSide = player === "1" ? "o" : "x";
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chatArray = useSelector((state) => state.chat.chatState);

  const messagesArray = chatArray.map((chatItem, index) => {
    return (
      <ChatMessage
        key={index}
        message={chatItem.message}
        time={chatItem.time}
        style={player === chatItem.player ? "own-message" : "opponent-message"}
      />
    );
  });

  function handleInput(event) {
    setMessage(event.target.value);
  }

  function defineTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${getTimeString(hours)}:${getTimeString(minutes)}`;
  }

  function handleSendMessage() {
    dispatch(addMessage({ player, message, time: defineTime(new Date()) }));
    setMessage("");
  }
  return (
    <aside className="chat">
      <header className="chat__header">
        <div className="chat__image-wrapper flex-center">
          <img
            src={`src/assets/images/${playerSide}.svg`}
            alt=""
            className="chat__image"
          />
        </div>
        <p>{`Player ${player}`}</p>
      </header>
      <main className="chat__message-container">
        {messagesArray}
        <div className="chat__anchor"></div>
      </main>

      <footer className="chat__footer">
        <input
          type="text"
          placeholder="Message"
          className="input"
          value={message}
          onChange={(event) => handleInput(event)}
        />
        <button className="send-button" onClick={handleSendMessage}></button>
      </footer>
    </aside>
  );
}
