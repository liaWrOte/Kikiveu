import React from 'react';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Toggle from '../../microComponents/Toggle';
import TextButton from '../../microComponents/TextButton';

import './createARide.scss';

const CreateARide = () => (
  <div className="createARide">
    <MainUserButton className="mainUserButton" />
    <TextButton />
    <label htmlFor="description">
      Description de la balade :
    </label>
    <textarea name="description" maxLength="200" rows="6" />
    <div className="createARide__item">
      <label htmlFor="date">
        Date de la balade :
      </label>
      <input
        type="date"
        id="date"
        name="date"
        min="2020-12-01"
        max="2021-12-31"
      />
    </div>
    <div className="createARide__item">
      <label htmlFor="time">
        à :
      </label>
      <input
        type="time"
        id="time"
        name="time"
        min=""
        max=""
        required
      />
    </div>
    <div className="createARide__item">
      <label htmlFor="nbParticipants">
        Nombre de participants maximum :
      </label>
      <input
        type="number"
        id="nbParticipants"
        name="nbParticipants"
        min="0"
        max="40"
      />
    </div>
    <p>
      Je choisis le type de la balade :
    </p>
    <div className="createARide__emoji">
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
    </div>
    <div className="createARide__item">
      <Toggle />
      Je souhaite recevoir des notifications à chaque commentaire
    </div>
    <TextButton />
    <div className="createARide__bottom">
      <PreviousButton />
    </div>
  </div>


);

export default CreateARide;
