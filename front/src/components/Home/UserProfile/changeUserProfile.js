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

const ChangeUserProfile = ({
  avatar,
  moodId,
  stateId,
  castrate,
  pseudo,
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
        <label htmlFor="profileImage" className="userProfile__form__profileImage">
          Changer la photo de profil
        </label>
        <input
          name="profileImage"
          id="profileImage"
          type="file"
          accept="image/png, image/jpeg"
        />
        <p>Comment se sent Kiki aujourd'hui ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="moodId">Calme
            <Emoji src={calm} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="calm"
              name="moodId"
            />
          </label>

          <label htmlFor="moodId">Excité
            <Emoji src={excited} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="excited"
              name="moodId"
            />
          </label>

          <label htmlFor="moodId">Joueur
            <Emoji src={player} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="player"
              name="moodId"
            />
          </label>

          <label htmlFor="moodId">Energique
            <Emoji src={rough} />
            <Input
              type="radio"
              onChange={changeField}
              value={4}
              id="rough"
              name="moodId"
            />
          </label>

          <label htmlFor="moodId">Fatigué
            <Emoji src={tired} />
            <Input
              type="radio"
              onChange={changeField}
              value={5}
              id="tired"
              name="moodId"
            />
          </label>

        </div>
        <p>L'état de santé de Kiki a changé ?</p>
        <div className="userProfile__form__emoji">
          <label htmlFor="stateId">Petite forme
            <Emoji src={small} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="small"
              name="stateId"
            />
          </label>

          <label htmlFor="stateId">Forme moyenne
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="medium"
              name="stateId"
            />
            <Emoji src={medium} />
          </label>

          <label htmlFor="stateId">Excellente forme
            <Emoji src={good} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="good"
              name="stateId"
            />
          </label>
          <label htmlFor="castrate">Castré
            <Toggle
              onChange={changeField}
              id="castrate"
              name="castrate"
              value={castrate}
            />
          </label>
        </div>
        <label htmlFor="pseudo">Votre nouveau pseudo
          <Input
            type="text"
            onChange={changeField}
            value={pseudo}
            name="pseudo"
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

ChangeUserProfile.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleUpdateUserProfile: PropTypes.func.isRequired,
};

export default ChangeUserProfile;
