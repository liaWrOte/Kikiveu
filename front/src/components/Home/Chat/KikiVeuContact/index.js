import React from 'react';

// Import composants
import PreviousButton from '../../../microComponents/PreviousButton';
import MainUserButton from '../../../microComponents/MainUserButton';
import Input from '../../../microComponents/Input';
import TextButton from '../../../microComponents/TextButton';

import './KikiVeuContact.scss';

const KikiVeuContact = () => {
  const cguText = 'Accéder aux CGU';
  const sendText ='Envoyer';
  return (
    <div className="kikiVeuContact">
      <div className="kikiVeuContact__wrapper">
        <div className="kikiVeuContact__wrapper__users">
          <MainUserButton />
          <MainUserButton />
          <MainUserButton />
          <MainUserButton />
          <MainUserButton />
        </div>
      </div>
      <div>
        <TextButton text={cguText} />
        <select>
          <option value="info">Demander un renseignement</option>
          <option value="signal">Signaler un utilisateur</option>
          <option value="signal">Supprimer mon compte KikiVeu</option>
        </select>
        <TextButton />
      </div>
      <div className="chat__bottom">
        <PreviousButton />
        <TextButton />
      </div>
    </div>
  );
};

export default KikiVeuContact;
