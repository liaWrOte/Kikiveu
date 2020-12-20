import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';


// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import RideButton from '../../microComponents/RideButton';
import Emoji from '../../microComponents/Emoji';
import TextArea from '../../microComponents/TextArea';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

// import emoji
// tags
import athletic from '../../../assets/images/ride/athletic_ride.png';
import learning from '../../../assets/images/ride/learning_ride.png';
import nature from '../../../assets/images/ride/nature_ride.png';
import peaceful from '../../../assets/images/ride/peaceful_ride.png';
import player from '../../../assets/images/ride/player_ride.png';
import urban from '../../../assets/images/ride/urban_ride.png';
import water from '../../../assets/images/ride/water_ride.png';

import './changeMyRide.scss';

const ChangeMyRide = ({
  markerLat,
  markerLng,
  myRideInfos,
  newDate,
  newTime,
  newTagsId,
  putRideMarker,
  changeField,
  updateTagRide,
  handleUpdateRide,
  responseOk
}) => {
  const placeCursor = 'Je change le lieu de ma balade';
  const saveText = 'Enregistrer';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(changeField);
    console.log('update User profile');
    handleUpdateRide();
  };

  const history= useHistory();   
  useEffect(() => {
  if (responseOk === true) {
    history.push('/');
  }
}, [responseOk]);

  const datetime = myRideInfos.eventDatetime;
  const newdatetime = datetime.replace('T', '  ');
  const newdate = newdatetime.slice(0, 11);

  const newtime = newdatetime.slice(11, 18);

  const string = myRideInfos.eventDatetime;
  const date = new Date(string);

  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  const formatedDate = `${addZero(date.getDate())}/${addZero((date.getMonth() + 1))}/${date.getFullYear()}`;

  const formatedTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

  return (
    <div className="changeMyRide">
      <RideButton />
      <TextButton text={placeCursor} handleClick={putRideMarker} buttonClass="button_small" />
      <form autoComplete="off" className="changeMyRide__form" onSubmit={handleSubmit}>
        <div className="twoColumns">

          <label htmlFor="eventDescription">
            Description de la balade :
            <TextArea
              name="eventDescription"
              maxLength="200"
              onChange={changeField}
              value={myRideInfos.eventDescription}
              inputClass="input_small"
            />
          </label>
          <label htmlFor="eventLat">
            Latitude :
            <Input
              name="eventLat"
              maxLength="200"
              onChange={changeField}
              value={markerLat}
              inputClass="input_small"
            />
          </label>
          <label htmlFor="eventLong">
            Longitude :
            <Input
              name="eventLong"
              maxLength="200"
              onChange={changeField}
              value={markerLng}
              inputClass="input_small"
            />
          </label>
        </div>
        <div className="twoColumns">
          <div className="ride__item">
            <label htmlFor="eventDatetime">
              Date et heure (JJ/MM/AAAA HH:MM):
              <Input
                type="text"
                id="date"
                name="eventDatetime"
                onChange={changeField}
                value= {`${formatedDate} ${formatedTime}`}
                inputClass="input_small"
              />
            </label>
          </div>
        </div>
        <div className="twoColumns">
          <div className="changeMyRide__item">
            <label htmlFor="eventDuration" className="fullWidth">
              Durée :
              <Input
                type="number"
                id="duration"
                name="eventDuration"
                onChange={changeField}
                value={myRideInfos.eventDuration}
                inputClass="input_small"
                placeholder="HH.MM"
              />
            </label>
          </div>
          <div className="changeMyRide__item">
            <label htmlFor="eventMaxParticipant" className="fullWidth">
              Participants:
              <Input
                type="number"
                id="maxParticipant"
                name="eventMaxParticipant"
                max="40"
                onChange={changeField}
                value={myRideInfos.eventMaxParticipant}
                inputClass="input_small"
              />
            </label>
          </div>
        </div>
        <p>
          Je choisis le type de la balade :
        </p>
        <ScrollContainer horizontal className="scroll-container">
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Sportive
                <Emoji src={athletic} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={1}
                  id="athletic"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Educative
                <Emoji src={learning} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={2}
                  id="learning"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Nature
                <Emoji src={nature} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={3}
                  id="nature"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Détente
                <Emoji src={peaceful} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={4}
                  id="peaceful"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Joueuse
                <Emoji src={player} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={5}
                  id="player"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Urbaine
                <Emoji src={urban} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={6}
                  id="urban"
                  name="tagsId"
                />
              </label>
              <label htmlFor="tagsId" className="changeMyRide__divLabel__wrapper__users__emoji">
                Aquatique
                <Emoji src={water} />
                <Input
                  type="checkbox"
                  onChange={changeField}
                  value={7}
                  id="water"
                  name="tagsId"
                />
              </label>
            </ScrollContainer>

        <div className="ride__bottom">
          <PreviousButton />
          <Input value="Enregistrer sur la carte" type="submit" className="button_small" />
        </div>
      </form>
    </div>
  );
};

ChangeMyRide.defaultProps = {
  date: '',
  time: '',
  description: '',
  duration: '',
  maxParticipant: 1,
};

// PropTypes
ChangeMyRide.propTypes = {
  myRideInfos: PropTypes.arrayOf(PropTypes.shape({
    eventDescription: PropTypes.string.isRequired,
    eventDatetime: PropTypes.string.isRequired,
    eventDuration: PropTypes.string.isRequired,
    eventMaxParticipant: PropTypes.string.isRequired,
    tagsId: PropTypes.number.isRequired,
  })).isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateRide: PropTypes.func.isRequired,
  putRideMarker: PropTypes.func.isRequired,
};


export default ChangeMyRide;
