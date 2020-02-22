import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import { Link } from 'react-router-dom';
import axios from 'axios';

import Character from './Character/Character';

import Dragon from './PNG/Dragon.png';
import DragonTail from './PNG/DragonTail.png';

import './Characters.css';

const Characters = props => {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_DB_URI + '/posts/' + props.match.params.Username
      )
      .then(resp => {
        console.log(resp.data);
        setCharactersList(resp.data.characters);
      });
  }, []);

  const handleDelete = name => {
    setCharactersList(charactersList.filter(el => el !== name));
  };

  const Submit = () => {
    console.log('LOL');
  };

  return (
    <div className='charactersOuterContainer'>
      <div className='charactersInnerContainer'>
        <div className='Characters_create'>
          <img src={DragonTail} className='Characters_DragonTail'></img>
          <div className='Character_createContainer'>
            <div className='Characters_createBtn'>Create a new character</div>
          </div>
          <img src={Dragon} className='Characters_Dragon'></img>
          <div className='Character_createContainer'>
            <Link onClick={Submit} className='Character_Btn'></Link>
          </div>
        </div>
        <div className='Characters'>
          {charactersList.map((characterOne, i) => (
            <div key={i}>
              <Character name={characterOne} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
