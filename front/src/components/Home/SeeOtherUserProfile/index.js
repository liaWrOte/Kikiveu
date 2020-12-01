import React from 'react';

import { Link } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Toggle from '../../microComponents/Toggle';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './SeeOtherUserProfile.scss';

const SeeOtherUserProfile = () => (
  <div className="seeOtherUserProfile">
    <MainUserButton className="mainUserButton" />
    <p>Kiki est</p>
    <div className="seeOtherUserProfile__emoji">
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
    </div>
    <p>L'état de santé de Kiki</p>
    <div className="userProfile__emoji">
      <Emoji />
      <Emoji />
      <Emoji />
      <p>Castré</p>
    </div>
    <div className="userProfile__bottom">
      <PreviousButton />
      <TextButton />
      <div> </div>
    </div>
  </div>
);

export default SeeOtherUserProfile;
