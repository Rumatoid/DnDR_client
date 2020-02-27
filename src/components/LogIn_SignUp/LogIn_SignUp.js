import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';

import './LogIn_SignUp__Frames.css';
import './LogIn_SignUp__Nav.css';

import LogIn from './LogIn/LogIn';
import SignUp from './LogIn/SignUp';

const LogIn_SignUp = () => {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      axios
        .get(
          process.env.REACT_APP_DB_URI + '/users/' + localStorage.getItem('jwt')
        )
        .then(res => {
          if (res.data.username) {
            const history = createBrowserHistory({ forceRefresh: true });

            history.push('/' + res.data.username);
          }
        });
    }
  }, []);

  const handleLog = e => {
    e.preventDefault();
    setFlag(true);
  };

  const handleSign = e => {
    e.preventDefault();
    setFlag(false);
  };

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <div className='nav'>
          <ul>
            <li className={flag ? 'LogIn-act' : 'LogIn-act LogIn-inact'}>
              <button onClick={e => handleLog(e)}>LogIn</button>
            </li>
            <li className={flag ? 'SignUp-act SignUp-inact' : 'SignUp-act'}>
              <button onClick={e => handleSign(e)}>SignUp</button>
            </li>
          </ul>
        </div>
        <div className={flag ? 'LogIn' : 'LogIn LogIn-left'}>
          <LogIn setFlag={setFlag} flag={flag} />
        </div>
        <div className={flag ? 'SignUp' : 'SignUp SignUp-left'}>
          <SignUp setFlag={setFlag} flag={flag} />
        </div>
      </div>
    </div>
  );
};

export default LogIn_SignUp;
