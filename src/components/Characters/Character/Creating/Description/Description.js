import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Description.scss';

const Description = ({ setLink, url }) => {
  setLink('description');

  return <div>Description</div>;
};

export default Description;
