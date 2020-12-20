import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useParams } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Toggle from '../../microComponents/Toggle';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

// import emoji
// mood
import calm from '../../../assets/images/mood/calm_mood.png';
import excited from '../../../assets/images/mood/excited_mood.png';
import player from '../../../assets/images/mood/player_mood.png';
import rough from '../../../assets/images/mood/rough_mood.png';
import tired from '../../../assets/images/mood/tired_mood.png';

// mood
import small from '../../../assets/images/shape/small_shape.png';
import medium from '../../../assets/images/shape/medium_shape.png';
import good from '../../../assets/images/shape/good_shape.png';

import '../UserProfile/userProfile.scss';

const SeeOtherUserProfile = ({
  otherUserInfo,
  otherUserDogInfo,
  getOtherUserProfile,
}) => {
  const changeText = 'Modifier mon profil';
  console.log(otherUserDogInfo);
  console.log(getOtherUserProfile);
  /* useEffect(() => {
    getOtherUserProfile();
  }, []); */

  const moodUrl = {
    1: calm,
    2: excited,
    3: player,
    4: rough,
    5: tired,
  };
  const moodText = {
    1: 'Calme',
    2: 'Excité',
    3: 'Joueur',
    4: 'Energique',
    5: 'Fatigué',
  };

  const stateUrl = {
    1: small,
    2: medium,
    3: good,
  };
  const stateText = {
    1: 'Petite forme',
    2: 'Forme moyenne',
    3: 'Excellente forme',
  };
  const castrateText = {
    0: 'Non',
    1: 'Oui',
  };

  return (
    <div className="userProfile">
      <MainUserButton image={otherUserDogInfo.avatar} className="ride_mainUserButton" />
      <h2 className="userProfile__title">Profil de {otherUserDogInfo.pseudo}</h2>
      <div className="userProfile__flex">
        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Humeur du jour </p>
          <Emoji src={otherUserDogInfo.avatar} />
          <p>{moodText[otherUserDogInfo.mooId]}</p>
        </div>

        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Etat de santé</p>
          <Emoji src={moodUrl[otherUserDogInfo.stateId]} />
          <p className="userProfile__flex__emoji__description">{moodText[otherUserDogInfo.moodId]}</p>

        </div>
      </div>
      <div>Castré : {castrateText[otherUserDogInfo.castrate]} </div>
      <div className="userProfile__bottom">
        <PreviousButton />
      </div>
    </div>

  );
};

SeeOtherUserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  moodId: PropTypes.number.isRequired,
  stateId: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  castrate: PropTypes.number.isRequired,
  otherUserInfo: PropTypes.string.isRequired,
  otherUserDogInfo: PropTypes.string.isRequired,
  getOtherUserProfile: PropTypes.string.isRequired,
};

export default SeeOtherUserProfile;
