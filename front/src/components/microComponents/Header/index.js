import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HelpCircle, Power } from 'react-feather';
import logo from '../../../assets/images/logo.png';

import './index.scss';

const Header = ({ handleLogout }) => (
  <header className="header">
    <div>
      <Link to="/contact"><HelpCircle className="header__icone" stroke-width={2} width={27} height={27} /></Link>
    </div>
    <div className="header__item">
      <Link to="/"><img src={logo} alt="logo KikiVeu" className="header__item__img" /></Link>
    </div>
    <div>
      <Link to="/connexion"><Power onClick={handleLogout} className="header__icone" stroke-width={2} width={27} height={27} /></Link>
    </div>
  </header>
);

// PropTypes
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
