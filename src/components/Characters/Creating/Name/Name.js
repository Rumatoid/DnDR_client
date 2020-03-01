import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Name.scss';

const Name = () => {
  //! Проверка при изменение размера окна
  // window.addEventListener('resize', () => {
  //   setSize(window.innerWidth);
  // });

  return (
    <div className='creating_joinOuter-Container'>
      <div className='creating_Nav'>
        <div className='creating_Nav-Container'>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Имя</div>
          </div>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Раса</div>
          </div>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Класс</div>
          </div>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Характеристики</div>
          </div>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Описание</div>
          </div>
          <div className='creating_NavEl-Container'>
            <div className='creating_NavEl'>Снаряжение</div>
          </div>
        </div>
      </div>
      <div className='creating_joinInner-Container'></div>
    </div>
  );
};

export default Name;
