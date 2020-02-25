import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { createBrowserHistory } from 'history';

import Character from './Character/Character';

import Dragon from './PNG/Dragon.png';
import DragonTail from './PNG/DragonTail.png';

import './Characters.css';

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      axios
        .get(
          process.env.REACT_APP_DB_URI + '/users/' + localStorage.getItem('jwt')
        )
        .then(res => {
          if (props.match.params.Username != res.data.username) {
            const history = createBrowserHistory({ forceRefresh: true });

            history.push('/' + res.data.username);
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
      const history = createBrowserHistory({ forceRefresh: true });

      history.push('/');
    }
  }, [props.match.params.Username]);

  const handleDelete = id => {
    setCharacters(characters.filter(el => el.id != id));
    axios.delete(process.env.REACT_APP_DB_URI + '/characters/' + id);
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
