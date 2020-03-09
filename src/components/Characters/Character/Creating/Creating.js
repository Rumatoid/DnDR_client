import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Creating.scss';

import Navbar from './Navbar/Navbar';

import * as longFuncs from './longFuncs';
import * as funcs from '../../../../funcs/Auth';
import * as checkAuth from '../../../../funcs/checkAuth';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Creating = props => {
  const [link, setLink] = useState(props.match.params.type);

  const history = props.history;

  const [style, setStyle] = useState({
    backgroundImage:
      'url(/img/backgrounds/background_overlay.png), url(/img/backgrounds/background_color.png),url(/img/backgrounds/background' +
      getRandomInt(1, 8) +
      '.jpg),url(/img/backgrounds/background.png)'
  });

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      checkAuth.checkAuth(props);
      checkAuth.checkCharacter(props);
    } else {
      history.push('/');
    }
  }, [props.match.params.Username]);

  useEffect(() => {
    setLink(props.match.params.type);
  }, [props.match.params.type]);

  return (
    <div className='creating_joinOuter-Container' style={style}>
      <Navbar link={link} props={props} />
      <div className='creating_inner'>{longFuncs.mainComponent(link)}</div>
    </div>
  );
};

export default Creating;
