import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, () => {
      return () => {
        socket.emit("disconnect");
        socket.off();
      };
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on(
      "message",
      (message) => {
        console.log(message);
        setMessages(messages => [...messages, message]);
      })
    }, []);

  const sendMessage = (event) =>{
    event.preventDefault();
    if(message){
      socket.emit("sendMessage",message,()=>setMessage(''))
    }
  }  
  console.log("Msgs",messages);
  return(
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
};

export default Chat;