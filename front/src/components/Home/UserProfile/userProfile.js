import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
}) => {
  const changeText = 'Modifier mon profil';

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="userProfile">
      <MainUserButton avatar={avatar} className="mainUserButton"  />
      <h2>Profil de {pseudo}</h2>
      <Link to="/1/edit"><TextButton text={changeText} /></Link>
      <p>L'état de Kiki aujourd'hui</p>
      <div className="userProfile__form__emoji">
        <label htmlFor="mood">Calme
          <Emoji src={calm} />
          <Input
            type="radio"
            value={0}
            id="calm"
            name="mood"
            checked={moodId === 0}
          />
        </label>

        <label htmlFor="mood">Excité
          <Emoji src={excited} />
          <Input
            type="radio"
            value={1}
            id="excited"
            name="mood"
            checked={moodId === 1}
          />
        </label>

        <label htmlFor="mood">Joueur
          <Emoji src={player} />
          <Input
            type="radio"
            value={2}
            id="player"
            name="mood"
            checked={moodId === 2}
          />
        </label>

        <label htmlFor="mood">Energique
          <Emoji src={rough} />
          <Input
            type="radio"
            value={3}
            id="rough"
            name="mood"
            checked={moodId === 3}
          />
        </label>

        <label htmlFor="mood">Fatigué
          <Emoji src={tired} />
          <Input
            type="radio"
            value={4}
            id="tired"
            name="mood"
            checked={moodId === 4}
          />
        </label>
      </div>
      <p>L'état de santé de Kiki a changé ?</p>
      <div className="userProfile__form__emoji">
        <label htmlFor="shape">Petite forme
          <Emoji src={small} />
          <Input
            type="radio"
            value={1}
            id="small"
            name="shape"
            checked={stateId === 1}
          />
        </label>

        <label htmlFor="shape">Forme moyenne
          <Input
            type="radio"
            value={2}
            id="medium"
            name="shape"
            checked={stateId === 2}
          />
          <Emoji src={medium} />
        </label>

        <label htmlFor="shape">Excellente forme
          <Emoji src={good} />
          <Input
            type="radio"
            value={3}
            id="good"
            name="shape"
            checked={stateId === 3}
          />
        </label>
        <label htmlFor="castrate">Castré
          <Toggle
            id="castrate"
            name="castrate"
            value={castrate}
            checked={castrate}
          />
        </label>
        </div>
      <div className="userProfile__bottom">
        <PreviousButton />
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  moodId: PropTypes.number.isRequired,
  stateId: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  castrate: PropTypes.number.isRequired,
};

export default UserProfile;
