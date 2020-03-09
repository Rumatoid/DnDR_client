import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useRouteMatch } from 'react-router-dom';

import { ReactComponent as Back } from './Back.svg';

import './Navbar.scss';

import Info from './info';

import data from './data';

const Navbar = ({ link, props }) => {
  const checkActive = str => {
    let res =
      link === str
        ? 'creating_NavEl-Container active'
        : 'creating_NavEl-Container';
    return res;
  };

  return (
    <div className='creating_Nav'>
      <Link to={'/' + props.match.params.Username}>
        <Back className='crating_Nav-backImg' />
      </Link>
      <div>
        <div className='creating_Nav-Container'>
          <div className={checkActive('race')}>
            <Link to={'race'} className='creating_NavEl'>
              Раса
            </Link>
            <Info text={data.race} />
          </div>
          <div className={checkActive('class')}>
            <Link to={'class'} className='creating_NavEl'>
              Класс
            </Link>
            <Info text={data.class} />
          </div>
          <div className={checkActive('abilities')}>
            <Link to={'abilities'} className='creating_NavEl'>
              Характеристики
            </Link>
            <Info text={data.abilities} />
          </div>
          <div className={checkActive('description')}>
            <Link to={'description'} className='creating_NavEl'>
              Описание
            </Link>
            <Info text={data.description} />
          </div>
          <div className={checkActive('equipment')}>
            <Link to={'equipment'} className='creating_NavEl'>
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
