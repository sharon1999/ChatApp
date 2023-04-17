import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import onlineIcon from '../../icons/onlineIcon.png';
import ChatList from "../ChatList/ChatList";

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://chat-app-reactjs.onrender.com/";

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
    socket.on("message", (message) => {
      console.log(messages);
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log("Msgs", messages);
  return (
    <div className="outerContainer">
      <div className="left-container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
        {/* <ChatList users={users} />*/}
        <div className="right-container">
    {
      users
        ? (
          <div>
            <h1 className='text-lg p-5'>People currently chatting:</h1>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem flex justify-center align-middle">
                    <img alt="Online Icon" className='px-2' src={onlineIcon}/>
                    {name}
                  </div>
                ))}
              </h2>
          </div>
        )
        : null
    }
  </div>
    </div>
  );
};

export default Chat;
