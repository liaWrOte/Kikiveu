import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

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

import './changeUserProfile.scss';

const ChangeUserProfile = ({
  userInfos,
  handleUpdateUserProfile,
  changeField,
  responseOk,
  avatar,
}) => {
  const changeAvatar = 'Cliquez ici pour modifier la photo';
  const saveText = 'Enregistrer';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(changeField);
    console.log('update User profile');
    handleUpdateUserProfile();
  };

  const history= useHistory();   
  useEffect(() => {
  if (responseOk === true) {
    history.push('/');
  }
}, [responseOk]);

  return (
    <div className="changeUserProfile">
      <form autoComplete="off" className="changeUserProfile__form" onSubmit={handleSubmit}>
        <MainUserButton className="mainUserButton changeUserProfile__form__avatar" image={avatar} />
        <TextButton text={changeAvatar} buttonClass="button_small_green changeUserProfile__form__avatarButton" />
        <p className="before_button">Comment se sent {userInfos.pseudo} aujourd'hui ?</p>
        <div className="changeUserProfile__form__emoji">
          <label htmlFor="moodId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={calm} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="calm"
              name="moodId"
            />
            Calme
          </label>

          <label htmlFor="moodId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={excited} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="excited"
              name="moodId"
            />
            Excité
          </label>

          <label htmlFor="moodId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={player} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="player"
              name="moodId"
            />
            Joueur
          </label>

          <label htmlFor="moodId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={rough} />
            <Input
              type="radio"
              onChange={changeField}
              value={4}
              id="rough"
              name="moodId"
            />
            Energique
          </label>

          <label htmlFor="moodId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={tired} />
            <Input
              type="radio"
              onChange={changeField}
              value={5}
              id="tired"
              name="moodId"
            />
            Fatigué
          </label>

        </div>
        <p className="before_button">L'état de santé de {userInfos.pseudo} a changé ?</p>
        <div className="changeUserProfile__form__emoji">
          <label htmlFor="stateId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={small} />
            <Input
              type="radio"
              onChange={changeField}
              value={3}
              id="small"
              name="stateId"
            />
            Fragile
          </label>

          <label htmlFor="stateId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={medium} />
            <Input
              type="radio"
              onChange={changeField}
              value={2}
              id="medium"
              name="stateId"
            />
            Moyen
          </label>

          <label htmlFor="stateId" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Emoji src={good} />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="good"
              name="stateId"
            />
            Bon
          </label>
          <label htmlFor="castrate" className="changeUserProfile__divLabel__wrapper__users__emoji">
            <Toggle
              onChange={changeField}
              id="castrate"
              name="castrate"
              value={userInfos.castrate}
            />
            <div id="castrate">Castré</div>
          </label>
        </div>
        <label htmlFor="pseudo" className="changeUserProfile__divLabel__wrapper__users__emoji">
          Mon pseudo :
          <Input
            type="text"
            onChange={changeField}
            value={userInfos.pseudo}
            name="pseudo"
          />
        </label>
        <div className="changeUserProfile__bottom">
          <PreviousButton />
          <TextButton text={saveText} buttonClass="button_small changeUserProfile__bottom__button" />
          <div> </div>
        </div>
      </form>
    </div>
  );
};

ChangeUserProfile.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleUpdateUserProfile: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  castrate: PropTypes.bool.isRequired,
};

export default ChangeUserProfile;
