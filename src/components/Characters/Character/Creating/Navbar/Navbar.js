import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from 'react-slick';

import { ReactComponent as Back } from './Back.svg';

import './Navbar.scss';
import './media.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Navbar = ({ link, props }) => {
  const [slideIndex, setsSlideIndex] = useState(0);

  let slider2 = null;

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
  }, [slider2]);

  useEffect(() => {
    slider2.slickGoTo(slideIndex);
    console.log(slideIndex);
  }, [slideIndex, slider2]);

  const settings = {
    // className: 'sliderShadowBoxNavBar',
    arrows: false,
    infinite: false,
    centerMode: true,
    // centerPadding: '-20%',
    slidesToShow: 3,

    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    // variableWidth: true,
    beforeChange: (current, next) => setsSlideIndex(next)
  };

  return (
    <div className='creating_Nav-list'>
      <Slider {...settings} ref={slider => (slider2 = slider)}>
        <NavLink to='race' activeClassName='selected' className='active'>
          Раса
        </NavLink>
        <NavLink to='class' activeClassName='selected' className='active'>
          Класс
        </NavLink>
        <NavLink to='abilities' activeClassName='selected' className='active'>
          Характеристики
        </NavLink>
        <NavLink to='description' activeClassName='selected' className='active'>
          Описание
        </NavLink>
        <NavLink to='equipment' activeClassName='selected' className='active'>
          Снаряжение
        </NavLink>
        <div />
      </Slider>
    </div>
  );
};

export default Navbar;
