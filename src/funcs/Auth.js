import axios from 'axios';

export const checkAuth = props => {
  axios
    .get(process.env.REACT_APP_DB_URI + '/users/' + localStorage.getItem('jwt'))
    .then(res => {
      if (
        props.match.params.Username !== res.data.username ||
        res.data.username === undefined
      ) {
        props.history.push('/');
      }
    });
};

export const checkCharacter = props => {
  let characters = null;
  axios
    .get(
      process.env.REACT_APP_DB_URI +
        '/characters/' +
        props.match.params.Username
    )
    .then(res => {
      characters = res.data;
      let character = characters.find(
        item => item.id === props.match.params.id
      );
      if (character === undefined) props.history.push('/');
    });
};
