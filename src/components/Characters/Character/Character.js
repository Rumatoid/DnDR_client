import React from 'react';

import './Character.scss';

import { ReactComponent as Delete } from '../PNG/Delete.svg';

const Character = ({ name, id, handleDelete, handleChoose }) => {
  const handleClickChoose = () => {
    handleChoose(id);
  };

  const handleClickDelete = () => {
    handleDelete(id);
  };

  return (
    <ul className='Character_ul'>
      <li onClick={handleClickChoose} className='Character_li-Container'>
        <div className='Character2'>{name}</div>
        <div className='Character'>{name}</div>
      </li>

      <li onClick={handleClickDelete} className='Character_li'>
        <Delete className='character_image' />
      </li>
    </ul>
  );
};

export default Character;
