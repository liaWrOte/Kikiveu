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
  const changeText = 'Modifier ma balade';
  const deleteText = 'Supprimer ma balade';

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
  const newduration = duration.replace('.',':');

  return (
    <div className="ride">
      <MainUserButton className="ride__mainUserButton" image={avatar} />
      <Link to="/ma-balade/edit"><TextButton text={changeText} buttonClass="button_small_green" /></Link>
      <TextButton
        text={deleteText}
        buttonClass="button_small"
        handleClick={() => {
          if (window.confirm('Je confirme la suppression de ma balade.')) deleteMyRide();
        }}
      />
      <p> Description de la balade :
        {myRideInfos.eventDescription}
      </p>
      <p>
        <Calendar /> Date et heure : {formatedDate} à {formatedTime}
      </p>
      <p>
        Durée: {newduration}
      </p>
      <p>
        Nombre de participants maximum : {myRideInfos.eventMaxParticipant}
      </p>
      <p>
        Type de balade : {typesRideText[myRideInfos.tagsId]}
      </p>
      <div className="ride__emoji">
        <Emoji src={typesRideUrl[myRideInfos.tagsId]} />
      </div>
      <p>Commentaires</p>
      <div className="ride__comments">

        {commentsSection.map((commentItem) => {
          
          console.log(commentItem);
          let commentDate = new Date(commentItem.createdAt);
          console.log(commentDate);

          let commentFormatedDate = `${addZero(commentDate.getDay())}/${addZero((commentDate.getMonth() + 1))}`;

          let commentFormatedTime = `${addZero(commentDate.getHours())}:${addZero(commentDate.getMinutes())}`;

          return (
            <div className="ride__comments__line" key={commentItem.commentId}>
              <p className="ride__comments__line__date">le {commentFormatedDate} à {commentFormatedTime}</p>
              <p>{commentItem.userId.pseudo}</p>
              <p>{commentItem.body}</p>
            </div>
          );
        })}

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
          <TextButton text="Envoyer" buttonClass="button_small_green" />
        </p>
      </form>
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
