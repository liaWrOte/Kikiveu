import React from 'react';
// import PropTypes from 'prop-types';

import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';

import './index.scss';

const Login = () => (
  <div className="login">
    <div className="login__img"><img src="" alt="logoKikiVeu" /></div>

    <form autoComplete="off" className="login__form">
      <Input
        name="email"
        placeholder="Email"
      />
      <Input
        name="password"
        type="password"
        placeholder="Mot de passe"
      />
      <TextButton
        type="submit"
        className="login-form-button"
      >
        Connexion
      </TextButton>
    </form>
    <div className="signin">
      <p className="signin__text">Première fois sur KikiVeu ?</p>
      <TextButton type="submit" className="signin__button">
        Inscription
      </TextButton>
    </div>

    <div className="animation">
      <img src="" alt="dogAnimation" />
    </div>
  </div>
);

// PropTypes

export default Login;
