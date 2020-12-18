import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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
  tags,
  time,
  duration,
  maxParticipant,
  changeField,
  updateTagRide,
  handleCreateARide,
  putRideMarker,
  hasRide,
  responseOk,
  avatar,
}) => {
  const placeCursor = 'Je positionne ma balade sur la carte';
  const saveText = 'Enregistrer';

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle Create A Ride');
    console.log(putRideMarker);
    putRideMarker();
    handleCreateARide();
  };

  useEffect(() => {
    if (responseOk === true) {
      history.push('/'); // when user is logged
    }
  }, [responseOk]);

  return (
    <div className="createARide">
      <MainUserButton className="ride__mainUserButton" image={avatar} />
      <TextButton text={placeCursor} handleClick={putRideMarker} buttonClass="button_small" />
      <form autoComplete="off" className="createARide__form" onSubmit={handleSubmit}>
        <div className="twoColumns">

          <label htmlFor="description">
            <div>Description de la balade :</div>
            <TextArea
              name="description"
              maxLength="200"
              onChange={changeField}
              value={description}

              inputClass="input_small"
            />
          </label>
          <div className="createARide__locate">
            Lieu de la balade :
            <p className="lieu">Latitude : </p>
            <p className="lieu">{markerLat}</p>
            <p className="lieu">Longitude :</p>
            <p className="lieu">{markerLng}</p>
          </div>
        </div>
        <div className="twoColumns">
          <div className="createARide__item">
            <label htmlFor="date">
              Date:
              <Input
                type="text"
                id="date"
                name="date"
                placeholder="JJ/MM/AAAA"
                onChange={changeField}
                value={date}
                inputClass="input_small"
              />
            </label>
          </div>
          <div className="createARide__item">
            <label htmlFor="time">
              Heure :
              <Input
                type="time"
                id="time"
                name="time"
                onChange={changeField}
                value={time}
                inputClass="input_small"
              />
            </label>
          </div>
        </div>
        <div className="twoColumns">
          <div className="createARide__item">
            <label htmlFor="duration" className="fullWidth">
              Durée :

              <Input
                type="number"
                id="duration"
                name="duration"
                onChange={changeField}
                value={duration}
                inputClass="input_small"
                placeholder="HH.MM"
              />
            </label>
          </div>
          <div className="createARide__item">
            <label htmlFor="maxParticipant" className="fullWidth">
              Participants:
              <Input
                type="number"
                id="maxParticipant"
                name="maxParticipant"
                max="40"
                onChange={changeField}
                value={maxParticipant}
                inputClass="input_small"
              />
            </label>
          </div>
        </div>
        <p>
          Je choisis le type de la balade : (plusieurs choix possibles)
        </p>
        <div className="createARide__divLabel">
          <div className="createARide__divLabel__wrapper">
            <div className="createARide__divLabel__wrapper__users">
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={athletic} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={1}
                  id="athletic"
                  name="tags"

                />
                Sportive
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={learning} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={2}
                  id="learning"
                  name="tags"
                />
                Educative
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={nature} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={3}
                  id="nature"
                  name="tags"
                />
                Nature
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={peaceful} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={4}
                  id="peaceful"
                  name="tags"
                />
                Détente
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">
                
                <Emoji src={player} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={5}
                  id="player"
                  name="tags"
                />
                Joueuse
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={urban} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={6}
                  id="urban"
                  name="tags"
                />
                Urbaine
              </label>
              <label htmlFor="tags" className="createARide__divLabel__wrapper__users__emoji">

                <Emoji src={water} />
                <Input
                  type="checkbox"
                  onChange={updateTagRide}
                  value={7}
                  id="water"
                  name="tags"
                />
                Aquatique
              </label>
            </div>
          </div>
        </div>

        <div className="createARide__bottom">
          <PreviousButton />
          <TextButton value="Enregistrer sur la carte" type="submit" buttonClass="button_small" text="Enregistrer" />
        </div>
      </form>
    </div>
  );
};

CreateARide.defaultProps = {
  date: '',
  time: '',
  description: '',
  duration: '',
  maxParticipant: '',
};

// PropTypes
CreateARide.propTypes = {
  markerLat: PropTypes.number.isRequired,
  markerLng: PropTypes.number.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  duration: PropTypes.string,
  maxParticipant: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleCreateARide: PropTypes.func.isRequired,
  putRideMarker: PropTypes.func.isRequired,
};

export default CreateARide;
