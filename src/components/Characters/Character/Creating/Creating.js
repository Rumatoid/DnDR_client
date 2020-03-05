import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './Creating.scss';

import Name from './Name/Name';
import Race from './Race/Race';

import Navbar from './Navbar/Navbar';

const Creating = props => {
  const [link, setLink] = useState('');

  let { path, url } = useRouteMatch();

  return (
    <div className='creating_joinOuter-Container'>
      <Navbar link={link} />
      {/* <div className='middleLine'></div>
      <div className='middleLine_2'></div> */}
      <div className='creating_inner'>
        <Switch>
          <Route path={`${url}/name`}>
            <Name setLink={setLink} url={url} />
          </Route>
          <Route path={`${url}/race`}>
            <Race setLink={setLink} url={url} />
          </Route>
          {
            //TODO Страница ошибки
          }
          <div>Error</div>
        </Switch>
      </div>
    </div>
  );
};

export default Creating;
