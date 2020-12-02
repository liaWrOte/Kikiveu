import React from 'react';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Toggle from '../../microComponents/Toggle';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import './userProfile.scss';

const UserProfile = () => {
  const saveText = 'Enregistrer';
  return (
    <div className="userProfile">
      <MainUserButton className="mainUserButton" />
      <p>Cliquez ici pour modifier la photo</p>
      <p>Comment se sent Kiki aujourd'hui ?</p>
      <div className="userProfile__emoji">
        <Emoji />
        <Emoji />
        <Emoji />
        <Emoji />
        <Emoji />
      </div>
      <p>L'état de santé de Kiki a changé ?</p>
      <div className="userProfile__emoji">
        <Emoji />
        <Emoji />
        <Emoji />
        <Toggle />
      </div>
      <Input />
      <div className="userProfile__bottom">
        <PreviousButton />
        <TextButton text={saveText} />
        <div> </div>
      </div>
    </div>
  );
};

export default UserProfile;
