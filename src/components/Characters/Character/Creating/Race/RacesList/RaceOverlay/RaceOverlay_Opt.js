import React, { useState, useEffect } from 'react';

const RaceOverlay_Opt = ({ option, i }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        active
          ? 'creating_Race-raceDetail_Container active'
          : 'creating_Race-raceDetail_Container'
      }
      key={i}
    >
      <div className='creating_Race-raceDetail_name' onClick={toggleActive}>
        {option.name}
      </div>
      <div className='creating_Race-raceDetail_value'>{option.value}</div>
    </div>
  );
};

export default RaceOverlay_Opt;
