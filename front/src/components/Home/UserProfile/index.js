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
  castrate,
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
        <TextButton text={changeAvatar} buttonClass="button_small_green" />
        <p className="before_button">Comment se sent Kiki aujourd'hui ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="mood">
            <Emoji src={calm} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="calm"
              name="mood"
              checked
            />
            Calme
          </label>

          <label htmlFor="mood">
            <Emoji src={excited} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="excited"
              name="mood"
            />
            Excité
          </label>

          <label htmlFor="mood">
            <Emoji src={player} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="player"
              name="mood"
            />
            Joueur
          </label>

          <label htmlFor="mood">
            <Emoji src={rough} />
            <Input
              type="radio"
              onChange={changeField}
              value={4}
              id="rough"
              name="mood"
            />
            Energique
          </label>

          <label htmlFor="mood">
            <Emoji src={tired} />
            <Input
              type="radio"
              onChange={changeField}
              value={5}
              id="tired"
              name="mood"
            />
            Fatigué
          </label>

        </div>
        <p className="before_button">L'état de santé de Kiki a changé ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="shape">
          <Emoji src={small} />
            <Input
              type="radio"
              onChange={changeField}
              value={0}
              id="small"
              name="shape"
            />
            
            Mauvais
          </label>

          <label htmlFor="shape">
          <Emoji src={medium} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="medium"
              name="shape"
            />
            Moyen
          </label>

          <label htmlFor="shape">
            <Emoji src={good} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="good"
              name="shape"
            />
            Bon
          </label>
          <label htmlFor="castrate">
            <Toggle
              onChange={changeField}
              id="castrate"
              name="castrate"
            />
            <div id="castrate">Castré</div>
          </label>
        </div>
        <p className="before_button">Votre nouveau pseudo</p>
        <label htmlFor="username">
          <Input
            type="text"
            onChange={changeField}
            value={username}
            name="username"
            inputClass="input_small"
          />
        </label>
        <div className="userProfile__bottom">
          <PreviousButton />
          <TextButton text={saveText} buttonClass="button_small" />
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
