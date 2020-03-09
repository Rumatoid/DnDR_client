import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';

const Navbar_Small = ({ props }) => {
  const [slideIndex, setsSlideIndex] = useState(0);
  useEffect(() => {
    switch (props.match.params.type) {
      case 'race':
        setsSlideIndex(0);
        break;
      case 'class':
        setsSlideIndex(1);
        break;
      case 'abilities':
        setsSlideIndex(2);
        break;
      case 'description':
        setsSlideIndex(3);
        break;
      case 'equipment':
        setsSlideIndex(4);
        break;
    }
  }, [props.match.params.type]);

  return (
    <div className='creating_Nav-list'>
      <SwipeableViews className='creating_Nav-views' index={slideIndex}>
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
          <NavLink
            to='description'
            activeClassName='selected'
            className='active'
          >
            Описание
          </NavLink>
        </div>
        <div className='creating_Nav-view'>
          <NavLink to='equipment' activeClassName='selected' className='active'>
            Снаряжение
          </NavLink>
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Navbar_Small;
