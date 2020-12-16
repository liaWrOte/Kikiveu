import React from 'react';
import PropTypes from 'prop-types';

import defaultAvatar from '../../assets/images/dog_profile.jpg';

// import bundle pour gestion des uploads d'images
import FileInputComponent from 'react-file-input-previews-base64';

// import composants
import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';
import Cgu from '../microComponents/Cgu';
import Emoji from '../microComponents/Emoji';
import PreviousButton from '../microComponents/PreviousButton';

// import emoji
// sex
import female from '../../assets/images/sex/female_sex.png';
import male from '../../assets/images/sex/male_sex.png';

// shapes
import smallShape from '../../assets/images/shape/small_shape.png';
import mediumShape from '../../assets/images/shape/medium_shape.png';
import goodShape from '../../assets/images/shape/good_shape.png';

// characters
import balanced from '../../assets/images/character/balanced_character.png';
import barker from '../../assets/images/character/barker_character.png';
import curious from '../../assets/images/character/curious_character.png';
import dominant from '../../assets/images/character/dominant_character.png';
import fearful from '../../assets/images/character/fearful_character.png';
import independent from '../../assets/images/character/independent_character.png';
import learning from '../../assets/images/character/learning_character.png';
import player from '../../assets/images/character/player_character.png';
import possessive from '../../assets/images/character/possessive_character.png';
import shy from '../../assets/images/character/shy_character.png';
import sociable from '../../assets/images/character/sociable_character.png';

import './index.scss';

import screenshot from '../../assets/images/dog_profile.jpg';

const SigninForm = ({
  dogsNumber,
  dogName,
  sex,
  age,
  castrate,
  dogCondition,
  character,
  picture,
  username,
  avatar,
  email,
  password1,
  password2,
  changeField,
  handleSignIn,
  uploadImage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signin');
    handleSignIn();
  };

  const sectionStyle = {
    backgroundImage: `url(${screenshot})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="signin">
      <div style={sectionStyle} className="signin__img" />

      <form autoComplete="off" className="signin__form" onSubmit={handleSubmit}>
        <h2 className="signin__form__title">Rejoindre KikiVeu</h2>
        <div className="signin__form__item">
          <label htmlFor="dogName">
            1. Comment s'appelle votre chien ?

            <Input
              name="dogName"
              type="text"
              onChange={changeField}
              id="dogName"
              value={dogName}
              inputClass="input"
            />
          </label>
        </div>

        <div className="signin__form__item">

          2. Est-ce un mâle ou une femelle ?
          <div className="signin__form__item__label">
            <label htmlFor="sex">
              <Emoji src={male} />
              <Input
                type="radio"
                onChange={changeField}
                value={1}
                id="male"
                name="sex"
                checked
              />
              Mâle
            </label>

            <label htmlFor="sex">
              <Emoji src={female} />
              <Input
                type="radio"
                onChange={changeField}
                value={0}
                id="female"
                name="sex"
              />
              Femelle
            </label>
          </div>
        </div>

        <div className="signin__form__item">
          <label htmlFor="age">
            3. Quel âge a-t-il ?
            <Input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={changeField}
              inputClass="input"
            />
          </label>
        </div>
        <div className="signin__form__item">
          4. Est-il castré ?
          <div className="signin__form__item__label">
            <label htmlFor="castrate">
              <Input
                type="radio"
                onChange={changeField}
                name="castrate"
                value={1}
                checked
              />
              Oui
            </label>
            <label htmlFor="castrate">
              <Input
                type="radio"
                onChange={changeField}
                name="castrate"
                value={0}
                key="noCastrate"
              />
              Non
            </label>
          </div>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            5. Comment décrirez-vous son état de santé général ?
            <div className="signin__form__item__label">
              <label htmlFor="dogCondition">
                <Emoji src={smallShape} />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="smallShape"
                  value={1}
                />
                Mauvais
              </label>
              <label htmlFor="dogCondition">
                <Emoji src={mediumShape} />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="mediumShape"
                  value={2}
                />
                Moyen
              </label>
              <label htmlFor="dogCondition">
                <Emoji src={goodShape} />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="goodShape"
                  value={3}
                  checked
                />
                Bon
              </label>
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          6. Votre chien est plutôt ? (1 choix possible)
          <div className="signin__form__item__label">
            <label htmlFor="character">
              <Emoji src={dominant} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="dominant"
                value={1}
              />
              Dominant
            </label>
            <label htmlFor="character">
              <Emoji src={shy} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="sensitive"
                value={2}
              />
              Timide/Sensible
            </label>
            <label htmlFor="character">
              <Emoji src={fearful} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="fearful"
                value={3}
              />
              Peureux
            </label>
            <label htmlFor="character">
              <Emoji src={player} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="playful"
                value={4}
              />
              Joueur
            </label>
            <label htmlFor="character">
              <Emoji src={independent} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="independent"
                value={5}
              />
              Indépendant
            </label>
            <label htmlFor="character">
              <Emoji src={sociable} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="sociable"
                value={6}
              />
              Sociable
            </label>
            <label htmlFor="character">
              <Emoji src={barker} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="barker"
                value={7}
              />
              Aboyeur
            </label>
            <label htmlFor="character">
              <Emoji src={possessive} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="possessive"
                value={8}
              />
              Possessif
            </label>
            <label htmlFor="character">
              <Emoji src={curious} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="curious"
                value={9}
              />
              Curieux
            </label>
            <label htmlFor="character">
              <Emoji src={learning} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="apprentice"
                value={10}
              />
              En apprentissage
            </label>
            <label htmlFor="character">
              <Emoji src={balanced} />
              <Input
                type="radio"
                onChange={changeField}
                name="character"
                id="stable"
                value={11}
              />
              Equilibré
            </label>
          </div>
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape" className="cgu__flex">
            7. KikiVeu est une application bienveillante, merci d'accepter la charte de KikiVeu et les CGU

            <Cgu className="cgu" />
            <label htmlFor="acceptCharte" className="cgu__flex__label">
              <input
                type="checkbox"
                name="acceptCharte"
                id="acceptCharte"
              />
              J'ai lu et j'accepte la charte de KikiVeu
            </label>
            <label htmlFor="acceptCGU" className="cgu__flex__label">
              <input
                type="checkbox"
                name="acceptCGU"
                id="acceptCGU"
              />
              J'ai lu et j'accepte les CGU
            </label>

          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="username">
            8. Veuillez entrer un pseudo
          </label>
          <Input
            name="username"
            onChange={changeField}
            id="username"
            value={username}
            inputClass="input"
          />
        </div>
        <div className="signin__form__item">

          
          <FileInputComponent
            labelText="Selectionnez une image"
            labelStyle={{ fontSize: 14 }}
            callbackFunction={(file_arr) => {
              /*uploadImage({
                filename: file_arr[0].base64,
                data: file_arr[0].name,
              });*/
              console.log({
                filename: file_arr[0].name,
                data: file_arr[0].base64,
              });
              //créer callback le fichier a bien été ajouté
            }}
            imagePreview={false}
            accept="image/*"
            textFieldComponent="choisir une image"
          />

        </div>
        <div className="signin__form__item">
          <label htmlFor="email">
            10. Veuillez entrer votre email
            <Input
              type="email"
              name="email"
              onChange={changeField}
              id="email"
              value={email}
              inputClass="input"
            />
          </label>
        </div>
        <div className="signin__form__item">
          <label htmlFor="password1">
            11. Veuillez choisir un mot de passe
          </label>
          <Input
            type="password"
            name="password1"
            onChange={changeField}
            id="password1"
            value={password1}
            inputClass="input"
          />
        </div>
        <div className="signin__form__item">
          <label htmlFor="password2">
            13. Veuillez confirmer votre mot de passe
          </label>
          <Input
            type="password"
            name="password2"
            onChange={changeField}
            id="password2"
            value={password2}
            inputClass="input"
          />
        </div>
        <p>Vous allez recevoir un email de confirmation d'inscription. Veuillez l'accepter.</p>
        <div className="signForm_flex">
          <PreviousButton />
          <TextButton
            text="Je m'inscris"
            type="submit"
            className="login-form-button"
            onClick={handleSubmit}
            buttonClass="button"
          >
            Je m'inscris
          </TextButton>

        </div>
      </form>
    </div>
  );
};

// PropTypes

SigninForm.defaultProps = {
  picture: '',
  dogCondition: 2,
  character: 1,
};

SigninForm.propTypes = {
  dogsNumber: PropTypes.number.isRequired,
  dogName: PropTypes.string.isRequired,
  sex: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  castrate: PropTypes.number.isRequired,
  dogCondition: PropTypes.number,
  character: PropTypes.number,
  picture: PropTypes.string,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
};

export default SigninForm;
