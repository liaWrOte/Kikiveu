import React, { useEffect } from 'react';
import { Calendar } from 'react-feather';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import athletic from '../../../assets/images/ride/athletic_ride.png';
import learning from '../../../assets/images/ride/learning_ride.png';
import nature from '../../../assets/images/ride/nature_ride.png';
import peaceful from '../../../assets/images/ride/peaceful_ride.png';
import player from '../../../assets/images/ride/player_ride.png';
import urban from '../../../assets/images/ride/urban_ride.png';
import water from '../../../assets/images/ride/water_ride.png';

import './ride.scss';

const Ride = ({
  rideInfos,
  changeField,
  comment,
  handlePostComment,
  commentsSection,
  loadComments,
  rideId,
}) => {
  /*useEffect(() => {
    getRide(rideInfos.eventId);
    console.log(commentsSection);
    loadComments();
  }, []);*/

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePostComment();
  };


  const { slug } = useParams();

  const typesRideUrl = {
    1: athletic,
    2: learning,
    3: nature,
    4: peaceful,
    5: player,
    6: urban,
    7: water,
  };

  const typesRideText = {
    1: 'Sportive',
    2: 'Educative',
    3: 'Nature',
    4: 'Détente',
    5: 'Joueuse',
    6: 'Urbaine',
    7: 'Aquatique',
  };

/*
  useEffect(() => {
    console.log(rideId);
    getRide();
  }, [rideInfos]);
*/

  const datetime = rideInfos.eventDatetime;
  const newdate = datetime.replace('T', '  ');
  const newdatetime = newdate.slice(0, 20);

  const changeText = 'Modifier ma balade';

  return (
    <div className="ride">
      <MainUserButton className="ride__mainUserButton" />
      <p> Description de la balade :
        {rideInfos.eventDescription}
      </p>
      <p>
        <Calendar /> Date et heure : {newdatetime}
      </p>
      <p>
        Durée: {rideInfos.eventDuration}
      </p>
      <p>
        Nombre de participants maximum : {rideInfos.eventMaxParticipant}
      </p>
      <p>
        Type de balade : {typesRideText[rideInfos.tagsId]}
      </p>
      <div className="ride__emoji">
        <Emoji src={typesRideUrl[rideInfos.tagsId]} />
      </div>
      <p>Commentaires</p>
      <div className="ride__comments">

        {commentsSection.map((commentItem) => (
          <div className="ride__comments__line">
            <p className="ride__comments__line__date">{commentItem.createdAt}</p>
            <p>{commentItem.userId.pseudo}</p>
            <p>{commentItem.body}</p>
          </div>
        ))}

      </div>
      <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
        <p>Laisser un commentaire :
          <Input
            type="text"
            name="comment"
            placeholder="Votre commentaire ici"
            onChange={changeField}
            value={comment}
            inputClass="input_small"
          />
          <TextButton />
        </p>
      </form>
      <div className="ride__bottom">
        <PreviousButton />
      </div>
    </div>
  );
};

Ride.propTypes = {
  rideInfos: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handlePostComment: PropTypes.func.isRequired,
};

export default Ride;