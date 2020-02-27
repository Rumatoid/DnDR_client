import React from 'react';

import './Character.css';

import { ReactComponent as Delete } from '../PNG/Delete.svg';

const Character = ({ name, id, handleDelete }) => {
  const handleClick = () => {
    handleDelete(id);
  };
  return (
    <ul className='Character_ul'>
      <li className='Character'>{name}</li>
      <li onClick={handleClick} className='Character_li'>
        <Delete className='character_image' />
      </li>
    </ul>
  );
};

export default Character;
