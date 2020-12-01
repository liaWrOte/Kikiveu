import React from 'react';

import { Link } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = () => (
  <div className="info">
    <PreviousButton />
    <MainUserButton className="info__mainUserButton" />
    <Link to="/1"><SecondaryUserButton /></Link>
  </div>
);

export default Info;
