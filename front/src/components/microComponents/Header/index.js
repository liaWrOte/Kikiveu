import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Mail, HelpCircle, Power } from 'react-feather';
import logo from '../../../assets/images/logo.png';

import './index.scss';

const Header = ({handleLogout }) => (
  <header className="header">
    <div>
      <Link to="/1/messages"><Mail className="header__icone" /></Link>
      <Link to="/contact"><HelpCircle className="header__icone" /></Link>
    </div>
    <div>
      <Link to="/"><img src={logo} alt="logo KikiVeu" className="header__item" /></Link>
    </div>
    <div>
      <Link to="/connexion"><Power onClick={handleLogout} className="header__icone" /></Link>
    </div>
  </header>
);

// PropTypes
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
