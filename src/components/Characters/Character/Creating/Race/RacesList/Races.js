import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Races.scss';
import './dropDown.scss';
import './media.scss';

import RaceModal from './RaceOverlay/RaceModal';
import RaceOverlay from './RaceOverlay/RaceOverlay';

const Races = () => {
  const [showModal, setShowModal] = useState(false);
  const [race, setRace] = useState(null);

  const toggleModal = race => {
    setShowModal(!showModal);
    if (!showModal) setRace(race);
  };

  let races = [
    { info: 'Гном', subraces: ['Лесной', 'Скальный'] },
    { info: 'Дварф', subraces: ['Горный', 'Холмовой'] },
    { info: 'Драконорожденный', subraces: 0 },
    { info: 'Полуорк', subraces: 0 },
    { info: 'Полурослик', subraces: ['Коренастый', 'Легконогий'] },
    { info: 'Полуэльф', subraces: 0 },
    { info: 'Тифлинг', subraces: 0 },
    { info: 'Человек', subraces: 0 },
    { info: 'Эльф', subraces: ['Высший', 'Лесной', 'Тёмный'] }
  ];

  return (
    <React.Fragment>
      <div className='creating_Race-races-Container'>
        {races.map((race, i) => {
          if (race.subraces.length === undefined)
            return (
              <div
                className='creating_Race-RaceEl-Container'
                key={i}
                onClick={() => toggleModal(race.info)}
              >
                <div className='creating_Race-RaceEl2'>{race.info}</div>
                <div className='creating_Race-RaceEl'>{race.info}</div>
              </div>
            );
          else {
            return (
              <div className='creating_Race-RaceEl-Container' key={i}>
                <div className='creating_Race-RaceEl2'>
                  <div className='creating_Race-RaceEl_race'>{race.info}</div>
                  <div className='creating_Race-RaceEl_subrace'>
                    {race.subraces.length} подрасы
                  </div>
                </div>
                <div className='creating_Race-RaceEl'>
                  <div className='creating_Race-RaceEl_race'>{race.info}</div>
                  <div className='creating_Race-RaceEl_subrace'>
                    {race.subraces.length} подрасы
                  </div>
                </div>
                {/** Контейнер со списком подрас */}
                <div
                  className='creating_Race-RaceEl_Dropdown-Container'
                  key={i}
                >
                  {race.subraces.map((subrace, i) => (
                    <div
                      className='creating_Race-RaceEl_DropdownEl-Container'
                      key={i}
                      onClick={() => toggleModal(subrace + '_' + race.info)}
                    >
                      <div className='creating_Race-RaceEl_Dropdown2'>
                        <div className='creating_Race-RaceEl_Dropdown_subrace'>
                          {subrace}
                        </div>
                        <div className='creating_Race-RaceEl_Dropdown_race'>
                          {race.info}
                        </div>
                      </div>
                      <div className='creating_Race-RaceEl_Dropdown'>
                        <div className='creating_Race-RaceEl_Dropdown_subrace'>
                          {subrace}
                        </div>
                        <div className='creating_Race-RaceEl_Dropdown_race'>
                          {race.info}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>

      {showModal ? (
        <RaceModal toggleModal={toggleModal}>
          <RaceOverlay race={race} />
        </RaceModal>
      ) : null}
    </React.Fragment>
  );
};

export default Races;
