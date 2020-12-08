import React from 'react';
import PropTypes from 'prop-types';

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
  mood,
  shape,
  username,
  signedIn,
  status,
  coords,
  changeField,
  handleUpdateUserProfile,
}) => {
  const changeAvatar = 'Cliquez ici pour modifier la photo';
  const saveText = 'Enregistrer';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(changeField);
    console.log('update User profile');
    handleUpdateUserProfile();
  };

  return (
    <div className="userProfile">
      <form autoComplete="off" className="userProfile_form" onSubmit={handleSubmit}>
        <MainUserButton className="mainUserButton" />
        <TextButton text={changeAvatar} />
        <p>Comment se sent Kiki aujourd'hui ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="mood">Calme
            <Emoji src={calm} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="calm"
              name="mood"
              checked
            />
          </label>

          <label htmlFor="mood">Excité
            <Emoji src={excited} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="excited"
              name="mood"
            />
          </label>

          <label htmlFor="mood">Joueur
            <Emoji src={player} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="player"
              name="mood"
            />
          </label>

          <label htmlFor="mood">Energique
            <Emoji src={rough} />
            <Input
              type="radio"
              onChange={changeField}
              value={4}
              id="rough"
              name="mood"
            />
          </label>

          <label htmlFor="mood">Fatigué
            <Emoji src={tired} />
            <Input
              type="radio"
              onChange={changeField}
              value={5}
              id="tired"
              name="mood"
            />
          </label>

        </div>
        <p>L'état de santé de Kiki a changé ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="shape">Petite forme
            <Emoji src={small} />
            <Input
              type="radio"
              onChange={changeField}
              value={0}
              id="small"
              name="shape"
            />
          </label>

          <label htmlFor="shape">Forme moyenne
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="medium"
              name="shape"
            />
            <Emoji src={medium} />
          </label>

          <label htmlFor="shape">Excellente forme
            <Emoji src={good} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="good"
              name="shape"
            />
          </label>
          <label htmlFor="status">En ligne
            <Toggle
              onChange={changeField}
              //value={1}
              id="status"
              name="status"
            />
          </label>
        </div>
        <label htmlFor="username">Votre nouveau pseudo
          <Input
            type="text"
            onChange={changeField}
            value={username}
            name="username"
          />
        </label>
        <div className="userProfile__bottom">
          <PreviousButton />
          <TextButton text={saveText} />
          <div> </div>
        </div>
      </form>
    </div>
  );
};

UserProfile.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleUpdateUserProfile: PropTypes.func.isRequired,
};

export default UserProfile;
