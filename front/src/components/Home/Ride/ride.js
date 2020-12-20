import React, { useEffect } from 'react';
import { Calendar } from 'react-feather';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import RideButton from '../../microComponents/RideButton';
import Emoji from '../../microComponents/Emoji';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';
import CommentAvatar from '../../microComponents/CommentAvatar';

import athletic from '../../../assets/images/ride/athletic_ride.png';
import learning from '../../../assets/images/ride/learning_ride.png';
import nature from '../../../assets/images/ride/nature_ride.png';
import peaceful from '../../../assets/images/ride/peaceful_ride.png';
import player from '../../../assets/images/ride/player_ride.png';
import urban from '../../../assets/images/ride/urban_ride.png';
import water from '../../../assets/images/ride/water_ride.png';

import './ride.scss';
import MainUserButton from '../../microComponents/MainUserButton';

const Ride = ({
  rideInfos,
  changeField,
  comment,
  handlePostComment,
  commentsSection,
  rideId,
  avatar,
}) => {
  /* useEffect(() => {
    getRide(rideInfos.eventId);
    console.log(commentsSection);
    loadComments();
  }, []); */
  const string = rideInfos.eventDatetime;
  const date = new Date(string);

  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  const formatedDate = `${addZero(date.getDate())}/${addZero((date.getMonth() + 1))}/${date.getFullYear()}`;

  const formatedTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

  const duration = rideInfos.eventDuration;
  const newduration = duration.replace('.', ':');

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

  const submitText = 'Envoyer';

  return (
    <div className="ride">
      <MainUserButton image={rideInfos.dogAvatar} />
      <h2 className="ride__title">Balade de {rideInfos.eventSlug}</h2>
      <div className="ride__scroll">
        <div className="ride__scroll__calendar">

          <Calendar />
          <div className="ride__scroll__calendar__text">
            le {formatedDate} à {formatedTime}
            , durée {newduration}
          </div>
        </div>

        <div className="ride__scroll__flex">
          <p>
            Max participants : {rideInfos.eventMaxParticipant}
          </p>
          <a target="blank" href={`https://www.google.com/maps/place/${rideInfos.eventLat},${rideInfos.eventLong}`}><TextButton buttonClass="button_small_green" text="J'y vais !" /></a>
        </div>
        <p className="ride__scroll__descriptionText">Description de la balade :</p>
        <div className="ride__scroll__flexDescription">
          <p className="ride__scroll__flexDescription__text">{rideInfos.eventDescription}</p>

          <div className="ride__scroll__flexDescription__emoji">
            <Emoji src={typesRideUrl[rideInfos.tagsId]} />
            <p className="ride__scroll__flexDescription__emoji__text">{typesRideText[rideInfos.tagsId]}</p>
          </div>
        </div>

        <p>Commentaires</p>
        <div className="ride__scroll__comments">

          {commentsSection.map((commentItem) => {
            console.log(commentItem);
            const commentDate = new Date(commentItem.createdAt);
            console.log(commentDate);

            const commentFormatedDate = `${addZero(commentDate.getDay())}/${addZero((commentDate.getMonth() + 1))}`;

            const commentFormatedTime = `${addZero(commentDate.getHours())}:${addZero(commentDate.getMinutes())}`;
            return (
              <div className="ride__scroll__comments__line" key={commentItem.commentId}>
                <div className="ride__scroll__comments__line__column">
                  <CommentAvatar profileImage={commentItem.dogsAvatar} />
                  <p className="ride__scroll__comments__line__column__date">{commentFormatedTime}</p>

                </div>

                <p className="ride__scroll__comments__line__comment">{commentItem.body}</p>
              </div>
            );
          })}

        </div>
        <form autoComplete="off" className="ride_commentForm" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="comment"
            placeholder="Votre commentaire ici"
            onChange={changeField}
            value={comment}
            inputClass="input_small_ride"
          />
          <TextButton text="Envoyer" buttonClass="ride_button_small_green" />
        </form>
      </div>
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
