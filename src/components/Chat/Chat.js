import React, { useState, useEffect } from "react";

import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from './TextContainer/TextContainer';
import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Slider from './Slider/Slider';

import './Chat.css';

let socket;

let colors = ['#1A1A1D','red', '#4a0a0a', '#fff06e', '#03a2ff' ];

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [color, setColor] = useState(0)

  //const ENDPOINT = 'https://react-dnd-test.herokuapp.com/';
  const ENDPOINT = 'localhost:5000/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
      
      document.body.style.backgroundColor = colors[color];

    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    socket.on('changeColor', (value) => {
      setColor(value)

      document.body.style.backgroundColor = colors[value];
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])
  
  useEffect(() => {

    socket.on('newUser', () => {
      socket.emit('emitChangeColor', color);
    });
  })

  const emitChangeColor = (value) => {

    socket.emit('emitChangeColor', value);

    document.body.style.backgroundColor = colors[value];
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer" >
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          <Slider color={color} setColor={setColor} emitChangeColor={emitChangeColor}/>
      </div>
      <TextContainer users={users}/>
      
    </div>
  );
}

export default Chat;