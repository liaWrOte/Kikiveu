import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FileInputComponent from 'react-file-input-previews-base64';
import defaultAvatar from '../../assets/images/dog_profile.jpg';

// import bundle pour gestion des uploads d'images

// import composants
import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';
import Cgu from '../microComponents/Cgu';
import Emoji from '../microComponents/Emoji';
import PreviousButton from '../microComponents/PreviousButton';
import AlertMessage from '../microComponents/AlertMessage';

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
  alertStatus,
  acceptCGU,
  changeCheckboxField,
  alertPasswordStatus,
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
            {((dogName === '3') && alertStatus) && (
              <AlertMessage message="Veuillez entrer le nom de votre chien" />
            )}
          </label>
        </div>

        <div className="signin__form__item">

          2. Est-ce un mâle ou une femelle ?
          <div className="signin__form__item__label">
            <label htmlFor="sex" className="createARide__divLabel__wrapper__users__emoji">
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

            <label htmlFor="sex" className="createARide__divLabel__wrapper__users__emoji">
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
            {((sex === '') && alertStatus) && (
              <AlertMessage message="Veuillez entrer le sexe de votre chien" />
            )}
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
            {((age === '') && alertStatus) && (
              <AlertMessage message="Veuillez entrer l'âge de votre chien" />
            )}
          </label>
        </div>
        <div className="signin__form__item">
          4. Est-il castré ?
          <div className="signin__form__item__label">
            <label htmlFor="castrate" className="text_select">
              <Input
                type="radio"
                onChange={changeField}
                name="castrate"
                value={1}
                checked
              />
              <p className="text_select">Oui</p>
            </label>
            <label htmlFor="castrate" className="text_select">
              <Input
                type="radio"
                onChange={changeField}
                name="castrate"
                value={0}
                key="noCastrate"
              />
              <p className="text_select">Non</p>
            </label>

          </div>
          {((castrate === '') && alertStatus) && (
          <AlertMessage message="Veuillez compléter cette information" />
          )}
        </div>
        <div className="signin__form__item">
          <label htmlFor="dogShape">
            5. Comment décrirez-vous son état de santé général ?
            <div className="signin__form__item__label">
              <label htmlFor="dogCondition" className="createARide__divLabel__wrapper__users__emoji" >
              
                <Emoji src={smallShape} />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="smallShape"
                  value={3}

                /> 
                Mauvais
                
              </label>
              <label htmlFor="dogCondition" className="createARide__divLabel__wrapper__users__emoji">
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
              <label htmlFor="dogCondition" className="createARide__divLabel__wrapper__users__emoji">
                <Emoji src={goodShape} />
                <Input
                  type="radio"
                  onChange={changeField}
                  name="dogCondition"
                  id="goodShape"
                  value={1}
                  checked
                />
                Bon
              </label>
              {((dogCondition === '') && alertStatus) && (
              <AlertMessage message="Veuillez préciser l'état de santévotre chien" />
              )}
            </div>
          </label>
        </div>
        <div className="signin__form__item">
          6. Votre chien est plutôt ? (1 choix possible)
          <div className="signin__form__item__label">
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            <label htmlFor="character" className="createARide__divLabel__wrapper__users__emoji">
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
            {((character === '') && alertStatus) && (
              <AlertMessage message="Veuillez choisir le trait de caractère principal de votre chien" />
            )}
          </div>
        </div>
        <div className="signin__form__item">
          <p>7. KikiVeu est une application bienveillante, merci d'accepter les conditions générales d'utilisation</p>

          <Cgu className="cgu" />
          <label htmlFor="acceptCGU" className="cgu__flex__label">
            <input
              type="checkbox"
              name="acceptCGU"
              id="acceptCGU"
              onChange={changeCheckboxField}
              checked={acceptCGU}
            />
            J'ai lu et j'accepte les CGU
          </label>
          {(!acceptCGU && alertStatus) && (
          <AlertMessage message="Veuillez accepter les conditions générales d'utilisation" />
          )}
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
        {((username === '') && alertStatus) && (
        <AlertMessage message="Veuillez choisir un pseudo" />
        )}
        <div className="signin__form__item">
          9. Sélectionnez une image
          <FileInputComponent
            labelText=""
            labelStyle={{ fontSize: 17 }}
            callbackFunction={(file_arr) => {
              uploadImage({
                filename: file_arr[0].name,
                data: file_arr[0].base64,
              });
              console.log({
                filename: (file_arr[0].name),
                data: (file_arr[0].base64).substring(22),
              });
              // créer callback le fichier a bien été ajouté
            }}
            imageContainerStyle={{ textAlign: 'center', margin: '0 auto' }}
            accept="image/*"
            textFieldComponent=<p className="image_upload_text">choisir une image"</p>
            buttonComponent=<button type="button" className="button_small">Choisir</button>
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
          {((email === '') && alertStatus) && (
          <AlertMessage message="Veuillez entrer un email valide" />
          )}
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
          {((password1 === '') && alertStatus) && (
          <AlertMessage message="Veuillez entrer votre mot de passe" />
          )}
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
          {((password2 === '') && alertStatus) && (
          <AlertMessage message="Veuillez confirmer votre mot de passe" />
          )}
          {alertPasswordStatus && (
          <AlertMessage message="Veuillez entrer des mots de passe identiques" />
          )}
        </div>
        {alertStatus && (
          <AlertMessage message="Vous avez des erreurs dans votre formulaire, veuillez remonter pour voir les messages d'erreurs" />
        )}
        <p>Vous allez recevoir un email de confirmation d'inscription. Veuillez l'accepter.</p>
        <div className="signForm_flex">
          <PreviousButton />
          <TextButton
            text="Je m'inscris"
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
  avatar: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  alertStatus: PropTypes.bool.isRequired,
  acceptCGU: PropTypes.bool.isRequired,
  changeCheckboxField: PropTypes.func.isRequired,
  alertPasswordStatus: PropTypes.bool.isRequired,
};

export default SigninForm;
