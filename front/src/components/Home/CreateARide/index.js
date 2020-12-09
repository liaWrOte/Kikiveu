import React from 'react';

import PropTypes from 'prop-types';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Toggle from '../../microComponents/Toggle';
import TextButton from '../../microComponents/TextButton';
import TextArea from '../../microComponents/TextArea';
import Input from '../../microComponents/Input';

// import des emojis types de balade
import athletic from '../../../assets/images/ride/athletic_ride.png';
import learning from '../../../assets/images/ride/learning_ride.png';
import nature from '../../../assets/images/ride/nature_ride.png';
import peaceful from '../../../assets/images/ride/peaceful_ride.png';
import player from '../../../assets/images/ride/player_ride.png';
import urban from '../../../assets/images/ride/urban_ride.png';
import water from '../../../assets/images/ride/water_ride.png';


import './createARide.scss';

const CreateARide = ({
  markerLat,
  markerLng,
  description,
  date,
  time,
  duration,
  maxParticipant,
  changeField,
  handleUpdateCreateARide
}) => {
  const placeCursor = 'Cliquer sur la carte pour positionner un marqueur indiquant la localisation de la balade';
  const saveText = 'Enregistrer';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('update Create A Ride');
    handleUpdateCreateARide();
  };

  return (
    <div className="createARide">
      <MainUserButton className="createARide__mainUserButton" />
      <TextButton text={placeCursor} />
      <label htmlFor="description">
        Description de la balade :
        <TextArea
          name="description"
          maxLength="200"
          onChange={changeField}
          value={description}
        />
      </label>
      <div className="createARide__locate">
        Localisation de la balade :
        <label htmlFor="markerLat">
          Latitude :
          <Input
            type="text"
            id="markerLat"
            name="markerLat"
            value={markerLat}
          />
        </label>
        <label htmlFor="markerLng">
          Longitude :
          <Input
            type="text"
            id="markerLng"
            name="markerLng"
            value={markerLng}
          />
        </label>
      </div>
      <div className="createARide__item">
        <label htmlFor="date">
          Date de la balade : 
          <Input
            placeholder="JJ/MM/YYYY"
            type="date"
            id="date"
            name="date"
            onChange={changeField}
            value={date}
          />
        </label>
      </div>
      <div className="createARide__item">
        <label htmlFor="time">
          Heure de la balade :
          <Input
            type="time"
            id="time"
            name="time"
            onChange={changeField}
            value={time}
          />
        </label>
      </div>
      <div className="createARide__item">
        <label htmlFor="duration">
          Durée approximative :
          <Input
            type="time"
            id="duration"
            name="duration"
            onChange={changeField}
            value={duration}
          />
        </label>
      </div>
      <div className="createARide__item">
        <label htmlFor="maxParticipant">
          Nombre de participants maximum :
          <Input
            type="number"
            id="maxParticipant"
            name="maxParticipant"
            max="40"
            onChange={changeField}
            value={maxParticipant}
          />
        </label>
      </div>
      <p>
        Je choisis le type de la balade :
      </p>
      <div className="createARide__divLabel">
        <label htmlFor="tagId" className="createARide__emoji">
          Sportive
          <Emoji src={athletic} />
          <Input
            type="radio"
            onChange={changeField}
            value={0}
            id="athletic"
            name="tagId"
          />
        </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Educative
        <Emoji src={learning} />
        <Input
          type="radio"
          onChange={changeField}
          value={1}
          id="learning"
          name="tagId"
        />
      </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Nature
        <Emoji src={nature} />
        <Input
          type="radio"
          onChange={changeField}
          value={2}
          id="nature"
          name="tagId"
        />
      </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Détente
        <Emoji src={peaceful} />
        <Input
          type="radio"
          onChange={changeField}
          value={3}
          id="peaceful"
          name="tagId"
        />
      </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Joueuse
        <Emoji src={player} />
        <Input
          type="radio"
          onChange={changeField}
          value={4}
          id="player"
          name="tagId"
        />
      </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Urbaine
        <Emoji src={urban} />
        <Input
          type="radio"
          onChange={changeField}
          value={5}
          id="urban"
          name="tagId"
        />
      </label>
      <label htmlFor="tagId" className="createARide__emoji">
        Aquatique
        <Emoji src={water} />
        <Input
          type="radio"
          onChange={changeField}
          value={6}
          id="water"
          name="tagId"
        />
      </label>

      </div>
      <div className="createARide__item">
        <Toggle />
        Je souhaite recevoir des notifications à chaque commentaire
      </div>
      <TextButton text={saveText} />
      <div className="createARide__bottom">
        <PreviousButton />
      </div>
    </div>
  );
};

// PropTypes
CreateARide.propTypes = {
  markerLat: PropTypes.number.isRequired,
  markerLng: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  time: PropTypes.string,
  duration: PropTypes.string.isRequired,
  maxParticipant: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateCreateARide: PropTypes.func.isRequired,
};

CreateARide.defaultProps = {
  date: '',
  time: '',
};

export default CreateARide;
