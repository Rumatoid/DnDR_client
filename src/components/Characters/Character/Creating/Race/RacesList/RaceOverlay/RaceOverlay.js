import React, { useState, useEffect } from 'react';

import './RaceOverlay_config.scss';
import './RaceOverlay.scss';

import data from './data';

import RaceOverlay_Opt from './RaceOverlay_Opt';

const RaceOverlay = props => {
  const race = data[props.race];

  useEffect(() => {
    console.log(props.race);
  }, []);

  return (
    <div className='creating_Race-race'>
      <div className='creating_Race-raceName'>{race.name}</div>
      <div className='creating_Race-raceDescription'>
        <p>{race.info}</p>
        <p className='creating_Race-raceDescription_Traits'>
          <strong>Расовые особенности</strong>
          <br />
          <p>{race.traits}</p>
        </p>
        {race.addInfo !== undefined ? (
          <p className='creating_Race-raceDescription_addInfo'>
            {race.addInfo}
          </p>
        ) : null}
      </div>
      <div className='creating_Race-raceDetail'>
        {race.options.map((option, i) => (
          <RaceOverlay_Opt option={option} i={i} />
        ))}
      </div>
    </div>
  );
};

export default RaceOverlay;
