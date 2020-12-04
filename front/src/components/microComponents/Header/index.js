import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

const Header = ({handleLogout }) => (
  <header className="header">
    <Link to="/1/messages"><p>Messages</p></Link>
    <Link to="/"><img alt="logo KikiVeu" /></Link>
    <Link to="/connexion"><button type="button" onClick={handleLogout}>Déconnexion</button></Link>
  </header>
);

// PropTypes
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
