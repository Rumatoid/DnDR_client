import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';

import { ReactComponent as Back } from './Back.svg';

import './Navbar.scss';
import './media.scss';

import Navbar_Small from './Navbar_Small';
import Navbar_Big from './Navbar_Big';

const Navbar = ({ props, size }) => {
  if (size < 768) return <Navbar_Small props={props} />;
  else return <Navbar_Big props={props} />;
};

export default Navbar;
