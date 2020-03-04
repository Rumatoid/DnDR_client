import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Name.scss';

const Name = ({ setLink, url }) => {
  setLink('name');

  return (
    <div className='creating_inner'>
      <div>Name</div>
    </div>
  );
};

export default Name;
