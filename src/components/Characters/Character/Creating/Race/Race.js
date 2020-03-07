import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Race.scss';

const Race = ({}) => {
  let races = [
    'Гном',
    'Дварф',
    'Драконорожденный',
    'Полуорк',
    'Полурослик',
    'Полуэльф',
    'Тифлинг',
    'Человек',
    'Эльф'
  ];

  return (
    <div className='creating_Race-container'>
      <div className='creating_Race-races-Container'>
        {races.map((race, i) => (
          <div className='creating_Race-RaceEl-Container' key={i}>
            <div className='creating_Race-RaceEl2'>{race}</div>
            <div className='creating_Race-RaceEl'>{race}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Race;
