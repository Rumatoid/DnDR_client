import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { createBrowserHistory } from 'history';

import Character from './Character/Character';

import { ReactComponent as Dragon } from './PNG/Dragon.svg';
import { ReactComponent as DragonTail } from './PNG/DragonTail.svg';

import './Characters.scss';

const history = createBrowserHistory({ forceRefresh: true });

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      axios
        .get(
          process.env.REACT_APP_DB_URI + '/users/' + localStorage.getItem('jwt')
        )
        .then(res => {
          if (props.match.params.Username !== res.data.username) {
            history.push('/' + res.data.username);
          }
          if (res.data.username === undefined) {
            history.push('/');
          }

          axios
            .get(
              process.env.REACT_APP_DB_URI +
                '/characters/' +
                props.match.params.Username
            )
            .then(res => {
              setCharacters(res.data);
            });
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

  const Submit = () => {
    axios
      .post(
        process.env.REACT_APP_DB_URI +
          '/characters/' +
          props.match.params.Username
      )
      .then(post_res => {
        setCharacters([...characters, post_res.data]);
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
