import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Race.scss';

import Races from './RacesList/Races';

const Race = ({}) => {
  return (
    <div className='creating_Race-container'>
      <Races />
    </div>
  );
};

export default Race;
