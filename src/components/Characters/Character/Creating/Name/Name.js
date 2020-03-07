import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Name.scss';

import { ReactComponent as Random } from './random.svg';

const Name = ({}) => {
  return (
    <div className='creating_Name-container'>
      <input
        className='creating_Name-inputName'
        type='text'
        placeholder='Character Name'
      />
      <Random className='creating_Name-random' />
    </div>
  );
};

export default Name;
