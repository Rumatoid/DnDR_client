import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar_Big = () => {
  return (
    <div className='creating_Nav-list'>
      <div className='creating_Nav-view'>
        <NavLink to='race' activeClassName='selected' className='active'>
          Раса
        </NavLink>
      </div>
      <div className='creating_Nav-view'>
        <NavLink to='class' activeClassName='selected' className='active'>
          Класс
        </NavLink>
      </div>
      <div className='creating_Nav-view'>
        <NavLink to='abilities' activeClassName='selected' className='active'>
          Характеристики
        </NavLink>
      </div>
      <div className='creating_Nav-view'>
        <NavLink to='description' activeClassName='selected' className='active'>
          Описание
        </NavLink>
      </div>
      <div className='creating_Nav-view'>
        <NavLink to='equipment' activeClassName='selected' className='active'>
          Снаряжение
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar_Big;
