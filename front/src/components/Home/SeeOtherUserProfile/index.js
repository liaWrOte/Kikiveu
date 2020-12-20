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

// dog sex
import female from '../../../assets/images/sex/female_sex.png';
import male from '../../../assets/images/sex/male_sex.png';

// temperament
import balanced from '../../../assets/images/character/balanced_character.png';
import barker from '../../../assets/images/character/barker_character.png';
import curious from '../../../assets/images/character/curious_character.png';
import dominant from '../../../assets/images/character/dominant_character.png';
import fearful from '../../../assets/images/character/fearful_character.png';
import independent from '../../../assets/images/character/independent_character.png';
import learning from '../../../assets/images/character/learning_character.png';
import playerT from '../../../assets/images/character/player_character.png';
import possessive from '../../../assets/images/character/possessive_character.png';
import shy from '../../../assets/images/character/shy_character.png';
import sociable from '../../../assets/images/character/sociable_character.png';

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

import './SeeOtherUserProfile.scss';

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
    1: good,
    2: medium,
    3: small,
  };
  const stateText = {
    1: 'Bon',
    2: 'Moyen',
    3: 'Fragile',
  };
  const castrateText = {
    0: 'Non',
    1: 'Oui',
  };
  
  const temperamentText = {
    1: 'Equilibré',
    2: 'Aboyeur',
    3: 'Curieux',
    4: 'Dominant',
    6: 'Peureux',
    7: 'Indépendant',
    8: 'En apprentissage',
    9: 'Joueur',
    10: 'Possessif',
    11: 'Timide/Sensible',
    12: 'Sociable',
  };

  const temperamentUrl = {
    1: balanced,
    2: barker,
    3: curious,
    4: dominant,
    6: fearful,
    7: independent,
    8: learning,
    9: playerT,
    10: possessive,
    11: shy,
    12: sociable,
  };

  const sexText = {
    0: 'Mâle',
    1: 'Femelle',
  };

  const sexUrl = {
    0: male,
    1: female,
  };

  return (
    <div className="userProfile">
      <MainUserButton image={otherUserDogInfo.avatar} className="ride_mainUserButton" />
      <h2 className="userProfile__title">Profil de {otherUserDogInfo.dogName} ({otherUserDogInfo.age} ans)</h2>
      <div className="userProfile__flex">
        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Sexe</p>
          <Emoji src={sexUrl[otherUserDogInfo.sex]} />
          <p>{sexText[otherUserDogInfo.sex]}</p>
        </div>
        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Tempérament</p>
          <Emoji src={temperamentUrl[otherUserDogInfo.temperamentId]} />
          <p>{temperamentText[otherUserDogInfo.temperamentId]}</p>
        </div>
      </div>
      <div className="userProfile__flex">
        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Humeur</p>
          <Emoji src={moodUrl[otherUserDogInfo.moodId]} />
          <p>{moodText[otherUserDogInfo.moodId]}</p>
        </div>
        <div className="userProfile__flex__emoji">
          <p className="userProfile__flex__emoji__description">Etat de santé</p>
          <Emoji src={stateUrl[otherUserDogInfo.stateId]} />
          <p className="userProfile__flex__emoji__description">{stateText[otherUserDogInfo.stateId]}</p>
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
