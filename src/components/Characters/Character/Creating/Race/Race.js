import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Race.scss';

import Info from '../utils/info';

import data from '../utils/data';

import Races from './RacesList/Races';

const Race = ({}) => {
  return (
    <div className='creating_Race-container'>
      <Info text={data.race} />
      <Races />
    </div>
  );
};

export default Race;
