import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './Navbar.scss';

import Info from './info';

import data from './data';

const Navbar = ({ link }) => {
  let { path, url } = useRouteMatch();

  const checkActive = str => {
    let res =
      link === str
        ? 'creating_NavEl-Container active'
        : 'creating_NavEl-Container';
    return res;
  };

  return (
    <div className='creating_Nav'>
      <div>
        <div className='creating_Nav-Container'>
          <div className={checkActive('name')}>
            <Link to={`${url}/name`} className='creating_NavEl'>
              Имя
            </Link>
            <Info text={data.name} />
          </div>
          <div className={checkActive('race')}>
            <Link to={`${url}/race`} className='creating_NavEl'>
              Раса
            </Link>
            <Info text={data.race} />
          </div>
          <div className={checkActive('class')}>
            <Link to={`${url}/class`} className='creating_NavEl'>
              Класс
            </Link>
            <Info text={data.class} />
          </div>
          <div className={checkActive('abilities')}>
            <Link to={`${url}/abilities`} className='creating_NavEl'>
              Характеристики
            </Link>
            <Info text={data.abilities} />
          </div>
          <div className={checkActive('description')}>
            <Link to={`${url}/description`} className='creating_NavEl'>
              Описание
            </Link>
            <Info text={data.description} />
          </div>
          <div className={checkActive('equipment')}>
            <Link to={`${url}/equipment`} className='creating_NavEl'>
              Снаряжение
            </Link>
            <Info text={data.equipment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//! Проверка при изменение размера окна
// window.addEventListener('resize', () => {
//   setSize(window.innerWidth);
// });
