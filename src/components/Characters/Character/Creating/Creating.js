import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './Creating.scss';

import Navbar from './Navbar/Navbar';

import * as funcs from './longFuncs';

const Creating = props => {
  const [link, setLink] = useState(props.match.params.type);

  useEffect(() => {}, []);

  useEffect(() => {
    setLink(props.match.params.type);
  }, [props.match.params.type]);

  return (
    <div className='creating_joinOuter-Container'>
      <Navbar link={link} props={props} />

      <div className='creating_inner'>{funcs.mainComponent(link)}</div>
    </div>
  );
};

export default Creating;
