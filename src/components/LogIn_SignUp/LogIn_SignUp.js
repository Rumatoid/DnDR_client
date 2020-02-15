import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LogIn_SignUp__Frames.css';
import './LogIn_SignUp__Nav.css';

import LogIn from './LogIn/LogIn';
import SignUp from './LogIn/SignUp';

import Plane from './plane.svg';

const LogIn_SignUp = () => {
  const [flag, setFlag] = useState(true);

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
        <image src='./plane.svg' />
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
          <LogIn setFlag={setFlag} />
        </div>
        <div className={flag ? 'SignUp' : 'SignUp SignUp-left'}>
          <SignUp setFlag={setFlag} />
        </div>
      </div>
    </div>
  );
};

export default LogIn_SignUp;
