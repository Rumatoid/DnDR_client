import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GET = () => {
  const [gets, setGets] = useState([]);

  const OneGet = ({ one }) => {
    const onSubmit = id => {
      axios.delete('http://localhost:5000/posts/' + id);

      setGets(gets.filter(el => el._id !== id));
    };

    return (
      <div>
        <p>{one.title}</p>
        <Link onClick={() => onSubmit(one._id)} to={`/GET`}>
          <button type='submit'>delete</button>
        </Link>
      </div>
    );
  };

  useEffect(() => {
    axios.get('http://localhost:5000/posts/');
    axios.get('http://localhost:5000/posts/').then(response => {
      setGets(response.data);
    });
  }, []);

  const deleteGET = id => {};

  return (
    <div>
      {gets.map((message, i) => (
        <div key={i}>
          <OneGet one={message} />
        </div>
      ))}
    </div>
  );
};

export default GET;
