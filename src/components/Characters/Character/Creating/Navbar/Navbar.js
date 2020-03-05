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
            <div className='creating_NavEl-Text-Container'>
              <div className='creating_NavEl-Text'>
                Описание расы вашего персонажа включает примеры имён для
                представителей этой расы. Вложите некоторый смысл в своё имя,
                даже если вы просто выбираете его из списка.
              </div>
            </div>
          </div>
          <div className={checkActive('race')}>
            <Link to={`${url}/race`} className='creating_NavEl'>
              Раса
            </Link>
            <div className='creating_NavEl-Text-Container'>
              <div className='creating_NavEl-Text'>
                Раса, которую вы выбрали, придаёт индивидуальность вашему
                персонажу, определяя характерную внешность и врождённые таланты,
                полученные через культуру и происхождение.
              </div>
            </div>
          </div>
          <div className={checkActive('class')}>
            <Link to={`${url}/class`} className='creating_NavEl'>
              Класс
            </Link>
            <div className='creating_NavEl-Text-Container'>
              <div className='creating_NavEl-Text'>
                Раса, которую вы выбрали, придаёт индивидуальность вашему
                персонажу, определяя характерную внешность и врождённые таланты,
                полученные через культуру и происхождение.
              </div>
            </div>
          </div>
          <div className={checkActive('abilities')}>
            <Link to={`${url}/abilities`} className='creating_NavEl'>
              Характеристики
            </Link>
          </div>
          <div className={checkActive('description')}>
            <Link to={`${url}/description`} className='creating_NavEl'>
              Описание
            </Link>
          </div>
          <div className={checkActive('equipment')}>
            <Link to={`${url}/equipment`} className='creating_NavEl'>
              Снаряжение
            </Link>
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
