import React, { Redirect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';
import logo from '../../assets/images/logo.png';

import './index.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };


  const loginText = 'Connexion';
  const signInText = 'Je m\'inscris';
  const mapText = 'Map';

  return (
    <div className="login">
      <div className="login__img"><img src={logo} alt="logoKikiVeu" /></div>
      <h2>Les balades canines près de chez vous</h2>
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
        <Link to="/"><TextButton text={mapText} /></Link>
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
