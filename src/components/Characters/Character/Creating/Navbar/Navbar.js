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

  return (
    <div className='creating_Nav'>
      <div>
        <div className='creating_Nav-Container'>
          <div
            className={
              link === 'name'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
            <Link to={`${url}/name`} className='creating_NavEl'>
              Имя
            </Link>
          </div>
          <div
            className={
              link === 'race'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
            <Link to={`${url}/race`} className='creating_NavEl'>
              Раса
            </Link>
          </div>
          <div
            className={
              link === 'class'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
            <Link to={`${url}/class`} className='creating_NavEl'>
              Класс
            </Link>
          </div>
          <div
            className={
              link === 'abilities'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
            <Link to={`${url}/abilities`} className='creating_NavEl'>
              Характеристики
            </Link>
          </div>
          <div
            className={
              link === 'description'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
            <Link to={`${url}/description`} className='creating_NavEl'>
              Описание
            </Link>
          </div>
          <div
            className={
              link === 'equipment'
                ? 'creating_NavEl-Container active'
                : 'creating_NavEl-Container'
            }
          >
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
