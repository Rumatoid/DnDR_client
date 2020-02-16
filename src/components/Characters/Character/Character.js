import React, { useState, useEffect } from 'react';

import './Character.css';

import Delete from './Delete.png';

const Character = ({ name, handleDelete }) => {
  const handleClick = () => {
    handleDelete(name);
  };
  return (
    <ul className='Character_ul'>
      <li className='Character'>{name}</li>
      <li className='Character_li' onClick={handleClick}>
        <img src={Delete} className='character_image'></img>
      </li>
    </ul>
  );
};

export default Character;
