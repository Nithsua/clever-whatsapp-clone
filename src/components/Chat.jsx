import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  Mic,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./css/Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("You typed >>> ", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message chat_receiver">
          <span className="chat_name">Sonny Sangha</span>
          Hey Guys
          <span className="chat_timestamp">1:00am</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a Message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
