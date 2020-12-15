import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
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

  const history = useHistory();

  useEffect(() => {
    if (isLogged === true) {
      history.push('/'); // when user is logged
    }
  }, [isLogged]);

  const loginText = 'Connexion';
  const signInText = 'Je m\'inscris';
  const mapText = 'Map';

  return (
    <div className="login">
      <div className="login__img"><img src={logo} alt="logoKikiVeu" /></div>
      <h2 id="catch_phrase">Les balades canines près de chez vous</h2>
      <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={changeField}
          value={email}
          inputClass="input"
        />
        <Input
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
          inputClass="input"
        />
        <TextButton text={loginText} buttonClass="button">
          Connexion
        </TextButton>
      </form>
      <div className="loginSignIn">
        <p className="login__loginSignIn__text">Première fois sur KikiVeu ?</p>
        <div className="full_width">
        <Link to="/inscription">
          <TextButton text="Je m'inscris" buttonClass="button">
            Inscription
          </TextButton>
        </Link>
        </div>
        <Link to="/"><TextButton text="Map" /></Link>
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
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
