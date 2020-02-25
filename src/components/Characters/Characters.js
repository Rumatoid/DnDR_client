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
  const [charactersID, setCharactersID] = useState([]);

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

          setCharactersID(res.data.charactersID);
        });
    } else {
      const history = createBrowserHistory({ forceRefresh: true });

      history.push('/');
    }
  }, [props.match.params.Username]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_DB_URI +
          '/characters/' +
          props.match.params.Username
      )
      .then(res => {
        setCharacters(res.data);
      });
  }, [charactersID]);

  const handleDelete = id => {
    axios
      .put(
        process.env.REACT_APP_DB_URI + '/users/' + props.match.params.Username,
        { charactersID: charactersID.filter(el => el !== id) }
      )
      .then(res => {
        axios
          .delete(process.env.REACT_APP_DB_URI + '/characters/' + id)
          .then(res => {
            setCharactersID(charactersID.filter(el => el !== id));
          });
      });
  };

  const Submit = () => {
    setCharacters([...characters, 'New Character']);
    axios
      .post(
        process.env.REACT_APP_DB_URI +
          '/characters/' +
          props.match.params.Username
      )
      .then(post_res => {
        setCharactersID([...charactersID, post_res.data]);
        axios
          .get(
            process.env.REACT_APP_DB_URI +
              '/users/' +
              localStorage.getItem('jwt')
          )
          .then(res => {
            res.data.charactersID.push(post_res.data);
            axios.put(
              process.env.REACT_APP_DB_URI + '/users/' + res.data.username,
              { charactersID: res.data.charactersID }
            );
          });
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
                name={character}
                id={charactersID[i]}
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
