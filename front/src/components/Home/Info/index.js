import React from 'react';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = () => (
  <div className="info">
    <PreviousButton />
    <MainUserButton className="mainUserButton" />
    <SecondaryUserButton />
  </div>
);

export default Info;
