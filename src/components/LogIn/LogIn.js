import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LogIn.css';

const Validator = ({ Valid, text }) => {
  if (!Valid) {
    return <span className='some-form__hint'>{text}</span>;
  }
  return <span className='some-form__hint'>{text}</span>;
};

const Start_wtihoutcookies = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [nicknameValid, setNicknameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const onSubmit = e => {
    const post = {
      title: nickname,
      text: password
    };

    //axios.post('http://localhost:5000/posts', post);
  };
  const onSubmitErr = e => {
    e.preventDefault();
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

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div className='some-form__line'>
          <input
            placeholder='Nickname'
            className='joinInput'
            type='text'
            onChange={event => handleNicknameChange(event.target.value)}
          />
          <Validator Valid={nicknameValid} text='Nickname error' />
        </div>
        <div className='some-form__line'>
          <input
            placeholder='Password'
            className='joinInput mt-20'
            type='text'
            onChange={event => handlePasswordChange(event.target.value)}
          />
          <Validator Valid={passwordValid} text='Password error' />
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
