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

const SeeMyRide = ({
  myRideInfos,
  changeField,
  comment,
  handlePostMyComment,
  commentsSection,
  deleteMyRide,
  avatar,
}) => {
  const { slug } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePostMyComment();
  };

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

  console.log(commentsSection[0]);
  const changeText = 'Modifier';
  const deleteText = 'Supprimer';

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

  const duration = myRideInfos.eventDuration;
  const newduration = duration.replace('.', ':');

  return (
    <div className="ride">
      <RideButton />
      <h2 className="ride__title">Ma balade</h2>
      <div className="ride__flex">
        <Link to="/ma-balade/edit" className="ride__flex__leftButton"><TextButton text={changeText} buttonClass="button_small_green" /></Link>
        <TextButton
          text={deleteText}
          buttonClass="button_small"
          handleClick={() => {
            if (window.confirm('Je confirme la suppression de ma balade.')) deleteMyRide();
          }}
        />
      </div>
      <div className="ride__scroll">
        <div className="ride__scroll__calendar">
          <Calendar />
          <div className="ride__scroll__calendar__text">
            le {formatedDate} à {formatedTime}

            , durée {newduration}
          </div>
        </div>
        <p>
          Max participants : {myRideInfos.eventMaxParticipant}
        </p>
        <p className="ride__scroll__descriptionText">Description de la balade :</p>
        <div className="ride__scroll__flexDescription">
          <p className="ride__scroll__flexDescription__text">
            {myRideInfos.eventDescription}
          </p>

          <div className="ride__scroll__flexDescription__emoji">
            <Emoji src={typesRideUrl[myRideInfos.tagsId]} />
            <p className="ride__scroll__flexDescription__emoji__text">{typesRideText[myRideInfos.tagsId]}</p>
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
                  <p className="ride__scroll__comments__line__column__date">le {commentFormatedTime}</p>
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

SeeMyRide.propTypes = {
  myRideInfos: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handlePostComment: PropTypes.func.isRequired,
  deleteMyRide: PropTypes.func.isRequired,
};

export default SeeMyRide;
