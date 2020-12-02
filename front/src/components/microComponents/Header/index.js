import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => (
  <header className="header">
    <Link to="/1/messages"><p>Messages</p></Link>
    <Link to="/"><img alt="logo KikiVeu" /></Link>
    <Link to="/connexion"><p>Déconnexion</p></Link>
  </header>
);

export default Header;
