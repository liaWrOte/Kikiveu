import React from 'react';

import { Link } from 'react-router-dom';

// Import composants
import Toggle from '../../microComponents/Toggle';
import MainUserButton from '../../microComponents/MainUserButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = () => (
  <div className="info">
    <div><Toggle />En ligne</div>
    <Link to="/1"><MainUserButton className="info__mainUserButton" /></Link>
    <Link to="/creer-balade"><SecondaryUserButton /></Link>
  </div>
);

export default Info;
