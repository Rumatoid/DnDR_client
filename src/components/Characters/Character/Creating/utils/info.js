import React from 'react';

import './info.scss';

const Info = ({ text }) => {
  return (
    <div className='creating_NavEl-Text-Container'>
      <div className='creating_NavEl-Text'>{text}</div>
    </div>
  );
};

export default Info;
