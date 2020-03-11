import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const RaceModal = props => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <div className='modal'>
      <div className='overlay' onClick={props.toggleModal} />
      <div className='content'>{props.children}</div>
    </div>,
    el
  );
};

export default RaceModal;
