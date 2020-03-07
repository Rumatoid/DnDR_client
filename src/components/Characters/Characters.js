import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Character from './Character/Character';

import { ReactComponent as Dragon } from './PNG/Dragon.svg';
import { ReactComponent as DragonTail } from './PNG/DragonTail.svg';

import * as funcs from '../../funcs/Auth';
import * as checkAuth from '../../funcs/checkAuth';

import './Characters.scss';

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  const history = props.history;

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      checkAuth.checkAuth(props);

      axios
        .get(
          process.env.REACT_APP_DB_URI +
            '/characters/' +
            props.match.params.Username
        )
        .then(res => {
          setCharacters(res.data);
        });
    } else {
      history.push('/');
    }
  }, [props.match.params.Username]);

  //TODO Проверка на удаление
  const handleDelete = id => {
    if (id) {
      setCharacters(characters.filter(el => el.id !== id));
      axios.delete(process.env.REACT_APP_DB_URI + '/characters/' + id);
    }
  };

  const handleChoose = id => {
    history.push(`/${props.match.params.Username}/${id}/builder/race`);
  };

  const Submit = () => {
    axios
      .post(
        process.env.REACT_APP_DB_URI +
          '/characters/' +
          props.match.params.Username
      )
      .then(post_res => {
        history.push(
          `/${props.match.params.Username}/${post_res.data.id}/builder/race`
        );
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    history.push('/');
  };

  return (
    <div className='charactersOuterContainer'>
      <div className='character_logoutBtn'>
        <div className='character_logoutBtn-Text'>
          <div onClick={handleLogout}>LOGOUT</div>
        </div>
      </div>
      <div className='charactersInnerContainer'>
        <div className='Characters_create'>
          <DragonTail className='Characters_DragonTail' />
          <div className='Character_createContainer'>
            <div onClick={Submit} className='Characters_createBtn'>
              Create a new character
            </div>
            <div onClick={Submit} className='Character_Btn' />
          </div>
          <Dragon className='Characters_Dragon' />
        </div>
        <div className='Characters'>
          {characters.map((character, i) => (
            <div key={i}>
              <Character
                name={character.name}
                id={character.id}
                handleDelete={handleDelete}
                handleChoose={handleChoose}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
