import React from 'react';
import { Link } from 'react-router-dom';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import './KikiVeuContact.scss';

const KikiVeuContact = () => {
  const cguText = 'Accéder aux CGU';
  const sendText ='Envoyer';
  return (
    <div className="kikiVeuContact">
      <div className="kikiVeuContact__wrapper">
        <h2 className="kikiVeuContact__item">Formulaire de contact KikiVeu</h2>
        <Link to="/cgu"><TextButton text={cguText} /></Link>
        <select className="kikiVeuContact__item">
          <option value="info">Demander un renseignement</option>
          <option value="signal">Signaler un utilisateur</option>
          <option value="signal">Supprimer mon compte KikiVeu</option>
        </select>
        <div className="kikiVeuContact__item">
          <label htmlFor="comment">Commentaire libre</label>
          <textarea id="comment" name="comment" rows="10" cols="44" />
        </div>
        <PreviousButton />
        <TextButton text={sendText} />
      </div>
    </div>
  );
};

export default KikiVeuContact;
