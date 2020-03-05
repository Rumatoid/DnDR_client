import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Equipment.scss';

const Equipment = ({ setLink, url }) => {
  setLink('equipment');

  return <div>Equipment</div>;
};

export default Equipment;
