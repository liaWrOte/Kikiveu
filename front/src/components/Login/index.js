import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';

import './index.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    handleLogin();
  };

  const loginText = 'Connexion';
  const signInText = 'Je m\'inscris';

  return (
    <div className="login">
      <div className="login__img"><img src="" alt="logoKikiVeu" /></div>
      <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={changeField}
          value={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <TextButton text={loginText}>
          Connexion
        </TextButton>
      </form>
      <div className="signin">
        <p className="signin__text">Première fois sur KikiVeu ?</p>
        <Link to="/inscription">
          <TextButton text={signInText}>
            Inscription
          </TextButton>
        </Link>
      </div>
      <div className="animation">
        <img src="" alt="dogAnimation" />
      </div>
    </div>
  );
};

// PropTypes

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
