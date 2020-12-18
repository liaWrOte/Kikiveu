import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useParams, useHistory } from 'react-router-dom';

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

import './userProfile.scss';

const UserProfile = ({
  avatar,
  moodId,
  stateId,
  castrate,
  pseudo,
  getUserProfile,
  deleteUserProfile,
}) => {
  const changeText = 'Modifier mon profil';
  const deleteText = "Supprimer mon compte";

  useEffect(() => {
    getUserProfile();
  }, []);

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
    1: 'Excellente forme',
    2: 'Forme moyenne',
    3: 'Petite forme',
  };
  const castrateText = {
    0: 'Non',
    1: 'Oui',
  };

  return (
    <div className="userProfile">
      <MainUserButton avatar={avatar} className="mainUserButton" />
      <h2>Profil de {pseudo}</h2>
      <div className="button_wrapper">
        <div className="buttonItem"><Link to="/profil/edit"><TextButton text={changeText} buttonClass="button_small"/></Link></div>
        <div className="buttonItem"><TextButton
          text={deleteText}
          buttonClass="button_small"
          handleClick={() => {
            if (window.confirm('Je confirme la suppression de mon compte KikiVeu.')) deleteUserProfile();
          }}
        />
        </div>
      </div>
      <div className="createARide__divLabel__wrapper__users__emoji">
        Son humeur du jour
        <Emoji src={moodUrl[moodId]} />
        {moodText[moodId]}
      </div>
      <div className="createARide__divLabel__wrapper__users__emoji">
        Son état de santé
        <Emoji src={stateUrl[stateId]} />
        {stateText[stateId]}
      </div>
      <div>Castré : {castrateText[castrate]}</div>
      <div className="userProfile__bottom">
        <PreviousButton />
      </div>
    </div>
  
  );
};

UserProfile.defaultProps = {
  moodId: '',
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  moodId: PropTypes.number,
  stateId: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  castrate: PropTypes.number.isRequired,
  deleteUserProfile: PropTypes.func.isRequired,
};

export default UserProfile;
