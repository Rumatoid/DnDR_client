import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';

import './LogIn.css';

//Refs
const inputNicknameRef = React.createRef();
const inputPasswordRef = React.createRef();

const LogIn = ({ flag }) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [nicknameValid, setNicknameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    inputNicknameRef.current.focus();
  }, []);

  useEffect(() => {
    if (flag === true) {
      inputNicknameRef.current.focus();
    }
  }, [flag]);

  const onSubmit = () => {
    inputNicknameRef.current.focus();

    axios
      .post(process.env.REACT_APP_DB_URI + '/users/' + nickname)
      .then(resp => {
        if (resp.data.user) {
          if (
            !(
              resp.data.user.username === nickname &&
              resp.data.user.password === password
            )
          ) {
            setNickname('');
            setPassword('');

            setNicknameValid(false);
            setPasswordValid(false);
          } else {
            localStorage.setItem('jwt', resp.data.token);

            const history = createBrowserHistory({ forceRefresh: true });
            history.push('/' + nickname);
          }
        } else {
          setNickname('');
          setPassword('');

          setNicknameValid(false);
          setPasswordValid(false);
        }
      });

    // e.preventDefault();
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
          value={nickname}
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
          value={password}
          placeholder='Password'
          className={passwordValid ? 'joinInput' : 'joinInput_error'}
          type='password'
          onChange={event => handlePasswordChange(event.target.value)}
          onKeyPress={handlePressEnter}
        />
      </div>
      <Link
        onClick={e => (!nickname || !password ? onSubmitErr(e) : onSubmit(e))}
        to={`/` + nickname}
      >
        <button className='button' type='submit'>
          Log In
        </button>
      </Link>
    </div>
  );
};

export default LogIn;
