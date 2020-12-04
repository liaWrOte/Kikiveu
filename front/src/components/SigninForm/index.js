import React from 'react';
import PropTypes from 'prop-types';

import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';
import Cgu from '../microComponents/Cgu';
import Emoji from '../microComponents/Emoji';
import PreviousButton from '../microComponents/PreviousButton';

import './index.scss';

const SigninForm = ({
  dogsNumber,
  dogName,
  sex,
  age,
  castrate,
  dogCondition,
  character,
  username,
  avatar,
  email,
  password1,
  password2,
  changeField,
  handleSignin,
}) => {
  const checkSelect = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signin');
    console.log(dogsNumber);
    console.log(dogName);
    handleSignin();
  };

  return (
    <div className="signin">
      <div className="signin__img"><img src="" alt="screenshotApp" /></div>

      <form autoComplete="off" className="signin__form" onSubmit={handleSubmit}>
        <h2 className="signin__form__title">Rejoindre KikiVeu</h2>
        <div className="signin__form__item">
          <label htmlFor="nbDogs">
            1. Combien de chiens avez-vous ?

            <Input
              name="nbDogs"
              onChange={changeField}
              value={dogsNumber}
            />
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogName">
            2. Comment s'appelle votre chien ?

            <Input
              name="dogName"
              onChange={changeField}
              id="dogName"
              value={dogName}
            />
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogSex">
            3. Est-ce un mâle ou une femelle ?
            <div className="signin__form__item__label">
              <label htmlFor={sex}>
                <Emoji />
                <input
                  type="checkbox"
                  onChange={changeField}
                  value={sex}
                  name="male"
                />
              </label>
              <label htmlFor={sex}>
                <Emoji />
                <input
                  type="checkbox"
                  onChange={changeField}
                  value={sex}
                  name="female"
                />

              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="age">
            4. Quel âge a-t-il ?
            <Input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={changeField}
            />
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogCastrated">
            5. Est-il castré ?
            <div className="signin__form__item__label">
              <label htmlFor="castrated">
                <Emoji />
                <input
                  type="checkbox"
                  name="castrated"
                  id="castrated"
                />
                Oui
              </label>
              <label htmlFor="noCastrated">
                <Emoji />
                <input
                  type="checkbox"
                  name="noCastrated"
                  id="noCastrated"
                />
                Non
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            6. Comment décrirez-vous son état de santé général ?
            <div className="signin__form__item__label">
              <label htmlFor="goodShape">
                <Emoji />
                <input
                  type="checkbox"
                  name="goodShape"
                  id="goodShape"
                />
                Mauvaise condition physique
              </label>
              <label htmlFor="middleShape">
                <Emoji />
                <input
                  type="checkbox"
                  name="middleShape"
                  id="middleShape"
                />
                Condition physique moyenne
              </label>
              <label htmlFor="badShape">
                <Emoji />
                <input
                  type="checkbox"
                  name="badShape"
                  id="badShape"
                />
                Bonne condition physique
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            7. Votre chien est plutôt ?
            <div className="signin__form__item__label">
              <label htmlFor="dominant">
                <Emoji />
                <input
                  type="checkbox"
                  name="dominant"
                  id="dominant"
                />
                Dominant
              </label>
              <label htmlFor="sensitive">
                <Emoji />
                <input
                  type="checkbox"
                  name="sensitive"
                  id="sensitive"
                />
                Timide/Sensible
              </label>
              <label htmlFor="fearful">
                <Emoji />
                <input
                  type="checkbox"
                  name="fearful"
                  id="fearful"
                />
                Peureux
              </label>
              <label htmlFor="playful">
                <Emoji />
                <input
                  type="checkbox"
                  name="playful"
                  id="playful"
                />
                Joueur
              </label>
              <label htmlFor="independent">
                <Emoji />
                <input
                  type="checkbox"
                  name="independent"
                  id="independent"
                />
                Indépendant
              </label>
              <label htmlFor="sociable">
                <Emoji />
                <input
                  type="checkbox"
                  name="sociable"
                  id="sociable"
                />
                Sociable
              </label>
              <label htmlFor="barker">
                <Emoji />
                <input
                  type="checkbox"
                  name="barker"
                  id="barker"
                />
                Aboyeur
              </label>
              <label htmlFor="possessive">
                <Emoji />
                <input
                  type="checkbox"
                  name="possessive"
                  id="possessive"
                />
                Possessif
              </label>
              <label htmlFor="curious">
                <Emoji />
                <input
                  type="checkbox"
                  name="curious"
                  id="curious"
                />
                Curieux
              </label>
              <label htmlFor="apprentice">
                <Emoji />
                <input
                  type="checkbox"
                  name="apprentice"
                  id="apprentice"
                />
                En apprentissage
              </label>
              <label htmlFor="stable">
                <Emoji />
                <input
                  type="checkbox"
                  name="stable"
                  id="stable"
                />
                Equilibré
              </label>
              <label htmlFor="distracted">
                <Emoji />
                <input
                  type="checkbox"
                  name="distracted"
                  id="distracted"
                />
                Distrait
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            8. KikiVeu est une application bienveillante, merci d'accepter la charte de KikiVeu et les CGU
            <div>
              <p>La charte</p>
              <Cgu className="cgu" />
              <label htmlFor="acceptCharte">
                <input
                  type="checkbox"
                  name="acceptCharte"
                  id="acceptCharte"
                />
                J'ai lu et j'accepte la charte de KikiVeu
              </label>
              <label htmlFor="acceptCGU">
                <input
                  type="checkbox"
                  name="acceptCGU"
                  id="acceptCGU"
                />
                J'ai lu et j'accepte les CGU
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="username">
            9. Veuillez entrer un pseudo
          </label>
          <Input
            name="pseudo"
            onChange={changeField}
            id="username"
            value={username}
          />
        </div>
        <div className="signin__form__item">
          <div className="signin__form__item__label">
            <label htmlFor="profileImage">
              10. Veuillez choisir une photo de profil
            </label>
            <input
              name="profileImage"
              id="profileImage"
              type="file"
              accept="image/png, image/jpeg"
            />
          </div>
        </div>
        <div className="signin__form__item">
          <label htmlFor="email">
            11. Veuillez entrer votre email
          </label>
          <Input
            name="email"
            onChange={changeField}
            id="email"
          />
        </div>
        <div className="signin__form__item">
          <label htmlFor="password1">
            12. Veuillez choisir un mot de passe
          </label>
          <Input
            name="password1"
            onChange={changeField}
            id="password1"
            value={password1}
          />
        </div>
        <div className="signin__form__item">
          <label htmlFor="password2">
            13. Veuillez confirmer votre mot de passe
          </label>
          <Input
            name="password2"
            onChange={changeField}
            id="password2"
            value={password2}
          />
        </div>
        <p>Vous allez recevoir un email de confirmation d'inscription. Veuillez l'accepter.</p>
        <TextButton
          type="submit"
          className="login-form-button"
          onClick={handleSubmit}
        >
          Je m'inscris
        </TextButton>
        <PreviousButton />
      </form>
    </div>
  );
};

// PropTypes

SigninForm.defaultProps = {
  dogsNumber: null,
  dogName: '',
  sex: null,
  age: null,
  castrate: null,
  dogCondition: null,
  character: PropTypes.arrayOf(
    null,
  ),
  username: '',
  avatar: '',
  email: '',
  password: '',
};

SigninForm.propTypes = {
  dogsNumber: PropTypes.number,
  dogName: PropTypes.string,
  sex: PropTypes.number,
  age: PropTypes.number,
  castrate: PropTypes.bool,
  dogCondition: PropTypes.number,
  character: PropTypes.arrayOf(
    PropTypes.number,
  ),
  username: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SigninForm;
