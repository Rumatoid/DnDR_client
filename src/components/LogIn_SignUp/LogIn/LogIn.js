import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LogIn.css';

const Validator = ({ Valid, text, style }) => {
  if (!Valid) {
    return <span className='some-form__hint'>{text}</span>;
  }
  return <span className='some-form__hint' style={style}></span>;
};

const LogIn = ({ setFlag }) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [style, setStyle] = useState({ zIndex: '-1', opacity: '0' });
  const [style_nickname, setStyle_nickname] = useState();
  const [style_password, setStyle_password] = useState();

  const [nicknameValid, setNicknameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  //Refs
  const inputNicknameRef = React.createRef();
  const inputPasswordRef = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      if (inputNicknameRef.current) inputNicknameRef.current.focus();
    }, 1000);
  }, []);

  const onSubmit = () => {
    const post = {
      title: nickname,
      text: password
    };

    setFlag(false);

    //axios.post('http://localhost:5000/posts', post);
  };
  const onSubmitErr = e => {
    e.preventDefault();

    if (!nickname) setNicknameValid(false);
    if (!password) setPasswordValid(false);
  };

  const handleNicknameChange = value => {
    setNickname(value);
    if (value) setNicknameValid(true);
    else setNicknameValid(false);
  };

  const handlePasswordChange = value => {
    setPassword(value);
    if (value) setPasswordValid(true);
    else setPasswordValid(false);
  };

  const handlePressEnter_onNickname = key => {
    if (key.charCode === 13) {
      if (!nickname) setNicknameValid(false);
      else inputPasswordRef.current.focus();
    }
  };

  const handlePressEnter = key => {
    if (key.charCode === 13) {
      if (!password) setPasswordValid(false);
      else onSubmit();
    }
  };

  return (
    <div>
      <div className='some-form__line'>
        <input
          ref={inputNicknameRef}
          style={style_nickname}
          placeholder='Nickname'
          className={nicknameValid ? 'joinInput' : 'joinInput_error'}
          type='text'
          onChange={event => handleNicknameChange(event.target.value)}
          onKeyPress={handlePressEnter_onNickname}
        />
      </div>
      <div className='some-form__line'>
        <input
          ref={inputPasswordRef}
          style={style_password}
          placeholder='Password'
          className={passwordValid ? 'joinInput' : 'joinInput_error'}
          type='text'
          onChange={event => handlePasswordChange(event.target.value)}
          onKeyPress={handlePressEnter}
        />
      </div>
      <Link
        onClick={e => (!nickname || !password ? onSubmitErr(e) : onSubmit(e))}
        to={`/`}
      >
        <button className='button' type='submit'>
          Log In
        </button>
      </Link>
    </div>
  );
};

export default LogIn;
