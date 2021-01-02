import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
// import Quiz from '../Quiz/Quiz';
// import Tutorials from '../Tutorials/Tutorials';

import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    console.log(event);
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  // const sendMessage = (v) => {
  //   socket.emit('sendMessage', message, () => setMessage(''));
  //   console.log(v);
  // };

  return (
    <div className="outerContainer">
      <TextContainer users={users}/>
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          {/* <Input sendMessage={sendMessage} /> */}
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          
          {/* <Quiz /> */}
      </div>    
      {/* <Tutorials />  */}
    </div>
  );
}

export default Chat;