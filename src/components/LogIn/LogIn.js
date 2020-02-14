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

const Start_wtihoutcookies = () => {
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
    inputNicknameRef.current.focus();
  }, [inputNicknameRef]);

  useEffect(() => {
    const borderRed = {
      borderColor: '#ff4141',
      boxShadow:
        'inset 0 0.5px 10.5px rgba(0, 0, 0, 0.075), 0 0 8px rgba(252, 44, 44, 0.6)'
    };

    if (!passwordValid) setStyle_password(borderRed);
    else setStyle_password();
  }, [passwordValid]);

  useEffect(() => {
    const borderRed = {
      borderColor: '#ff4141',
      boxShadow:
        'inset 0 0.5px 10.5px rgba(0, 0, 0, 0.075), 0 0 8px rgba(252, 44, 44, 0.6)'
    };

    if (!nicknameValid) setStyle_nickname(borderRed);
    else setStyle_nickname();
  }, [nicknameValid]);

  const onSubmit = () => {
    const post = {
      title: nickname,
      text: password
    };

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
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div className='some-form__line'>
          <input
            ref={inputNicknameRef}
            style={style_nickname}
            placeholder='Nickname'
            className='joinInput'
            type='text'
            onChange={event => handleNicknameChange(event.target.value)}
            onKeyPress={handlePressEnter_onNickname}
          />
          <Validator
            Valid={nicknameValid}
            text='Nickname error'
            style={style}
          />
        </div>
        <div className='some-form__line'>
          <input
            ref={inputPasswordRef}
            style={style_password}
            placeholder='Password'
            className='joinInput mt-20'
            type='text'
            onChange={event => handlePasswordChange(event.target.value)}
            onKeyPress={handlePressEnter}
          />
          <Validator
            Valid={passwordValid}
            text='Password error'
            style={style}
          />
        </div>
        <Link
          onClick={e => (!nickname || !password ? onSubmitErr(e) : onSubmit(e))}
          to={`/`}
        >
          <button className='button mt-20' type='submit'>
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start_wtihoutcookies;
