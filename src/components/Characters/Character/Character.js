import React, { useState, useEffect } from 'react';

import './Character.css';

import Delete from './Delete.png';

const Character = ({ name, id, handleDelete }) => {
  const handleClick = () => {
    handleDelete(id);
  };
  return (
    <ul className='Character_ul'>
      <li className='Character'>{name}</li>
      <li onClick={handleClick} className='Character_li'>
        <img src={Delete} className='character_image'></img>
      </li>
    </ul>
  );
};

export default Character;
