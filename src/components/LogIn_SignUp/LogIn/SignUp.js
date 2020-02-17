import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LogIn.css';

const SignUp = ({}) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [nicknameValid, setNicknameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(true);

  //Refs
  const inputNicknameRef = React.createRef();
  const inputPasswordRef = React.createRef();
  const inputPasswordConfirmRef = React.createRef();

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
    if (!passwordConfirm) setPasswordConfirmValid(false);
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

  const handlePasswordConfirmChange = value => {
    setPasswordConfirm(value);
    if (value) setPasswordConfirmValid(true);
    else setPasswordConfirmValid(false);
  };

  const handlePressEnter_onNickname = key => {
    if (key.charCode === 13) {
      if (!nickname) setNicknameValid(false);
      else inputPasswordRef.current.focus();
    }
  };

  const handlePressEnter_onPassword = key => {
    if (key.charCode === 13) {
      if (!password) setPasswordValid(false);
      else inputPasswordConfirmRef.current.focus();
    }
  };

  const handlePressEnter_onPasswordCofirm = key => {
    if (key.charCode === 13) {
      if (!passwordConfirm) setPasswordConfirmValid(false);
      else onSubmit();
    }
  };

  return (
    <div>
      <div className='some-form__line'>
        <input
          ref={inputNicknameRef}
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
          placeholder='Password'
          className={passwordValid ? 'joinInput' : 'joinInput_error'}
          type='text'
          onChange={event => handlePasswordChange(event.target.value)}
          onKeyPress={handlePressEnter_onPassword}
        />
      </div>
      <div className='some-form__line'>
        <input
          ref={inputPasswordConfirmRef}
          placeholder='Confirm Password'
          className={passwordConfirmValid ? 'joinInput' : 'joinInput_error'}
          type='text'
          onChange={event => handlePasswordConfirmChange(event.target.value)}
          onKeyPress={handlePressEnter_onPasswordCofirm}
        />
      </div>
      <Link
        onClick={e => (!nickname || !password ? onSubmitErr(e) : onSubmit(e))}
        to={`/`}
      >
        <button className='button' type='submit'>
          SIGN UP
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
