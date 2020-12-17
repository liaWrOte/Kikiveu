import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'react-feather';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import './KikiVeuContact.scss';

const KikiVeuContact = () => (
    <div className="kikiVeuContact">
      <div className="kikiVeuContact__wrapper">
        <h2 className="kikiVeuContact__item"><Mail />Pour contacter la team KikiVeu :</h2>
        <p className="kikiVeuContact__item">kikiveu.contact@gmail.com</p>
      </div>
      <PreviousButton />
    </div>
  );

export default KikiVeuContact;
