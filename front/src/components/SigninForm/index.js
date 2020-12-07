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
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
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

          3. Est-ce un mâle ou une femelle ?
          <div className="signin__form__item__label">
            <Emoji />
            <Input
              type="radio"
              onChange={changeField}
              value={1}
              id="male"
              name="sex"
              checked
            />
            <label htmlFor="sex">Mâle</label>

            <Emoji />
            <Input
              type="radio"
              onChange={changeField}
              value={0}
              id="female"
              name="sex"
            />
            <label htmlFor="sex">Female</label>
          </div>

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
          5. Est-il castré ?
          <div className="signin__form__item__label">
            <Input
              type="radio"
              onChange={changeField}
              name="castrate"
              id="castrate"
              value={1}
              checked
            />
            <label htmlFor="castrate">Oui</label>
            <Input
              type="radio"
              onChange={changeField}
              name="castrate"
              id="noCastrate"
              value={0}
            />
            <label htmlFor="castrate">Non</label>
          </div>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            6. Comment décrirez-vous son état de santé général ?
            <div className="signin__form__item__label">
              <label htmlFor="dogCondition">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="badShape"
                  value={2}
                />
                Mauvaise condition physique
              </label>
              <label htmlFor="dogCondition">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="middleShape"
                  value={1}
                />
                Condition physique moyenne
              </label>
              <label htmlFor="dogCondition">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="goodShape"
                  value={0}
                  checked
                />
                Bonne condition physique
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            7. Votre chien est plutôt ? (1 choix possible)
            <div className="signin__form__item__label">
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="dominant"
                  value="dominant"
                />
                Dominant
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="sensitive"
                  value="sensitive"
                />
                Timide/Sensible
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="fearful"
                  value="fearful"
                />
                Peureux
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="playful"
                  value="playful"
                />
                Joueur
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="independent"
                  value="independent"
                />
                Indépendant
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="sociable"
                  value="sociable"
                />
                Sociable
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="barker"
                  value="barker"
                />
                Aboyeur
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="possessive"
                  value="possessive"
                />
                Possessif
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="curious"
                  value="curious"
                />
                Curieux
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="apprentice"
                  value="apprentice"
                />
                En apprentissage
              </label>
              <label htmlFor="character">
                <Emoji />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="character"
                  id="stable"
                  value="stable"
                />
                Equilibré
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
            name="username"
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
            <Input
              name="email"
              onChange={changeField}
              id="email"
              value={email}
            />
          </label>
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

SigninForm.propTypes = {
  dogsNumber: PropTypes.number.isRequired,
  dogName: PropTypes.string.isRequired,
  sex: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  castrate: PropTypes.number.isRequired,
  dogCondition: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
};

export default SigninForm;
