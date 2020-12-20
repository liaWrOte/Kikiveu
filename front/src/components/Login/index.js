import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../microComponents/Input';
import TextButton from '../microComponents/TextButton';
import logo from '../../assets/images/logo.png';

import dogWalk from '../../assets/images/dogWalk.jpeg';

import './index.scss';
import AlertMessage from '../microComponents/AlertMessage';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  alertLoginStatus,
}) => {
  console.log(alertLoginStatus);
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

  const sectionStyle = {
    backgroundImage: `url(${dogWalk})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  /*useEffect(() => {
    <AlertMessage message="Votre indentifiant/mot de passe est incorrect" />
  }, [alertloginStatus])*/

  const loginText = 'Connexion';
  const signInText = 'Je m\'inscris';

  return (
    <div className="login">
      <div className="login__img" style={sectionStyle} />
      <div className="login__form">
        <div className="login__form__img"><img src={logo} alt="logoKikiVeu" /></div>
        <h2 id="catch_phrase">Les balades canines près de chez vous</h2>
        <form autoComplete="off" className="login__form__form" onSubmit={handleSubmit}>
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
          {alertLoginStatus && (
            <AlertMessage message="Votre indentifiant/mot de passe est incorrect" />
          )}
        </form>
        <div className="login__form__loginSignIn">
          <p className="login__form__loginSignIn__text">Première fois sur KikiVeu ?</p>
          <div className="full_width">
            <Link to="/inscription">
              <TextButton text={signInText} buttonClass="button">
                Inscription
              </TextButton>
            </Link>
          </div>
        </div>
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
