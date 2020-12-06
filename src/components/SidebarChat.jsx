import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./css/SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <div className="sidebar_chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebar_chat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
