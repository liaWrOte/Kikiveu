import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'react-feather';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import kevin from '../../../assets/images/teamKikiveu/kevin.png';
import sandrine from '../../../assets/images/teamKikiveu/sandrine.png';
import jordane from '../../../assets/images/teamKikiveu/jordane.png';
import julien from '../../../assets/images/teamKikiveu/julien.png';

import './KikiVeuContact.scss';

const KikiVeuContact = () => (
    <div className="kikiVeuContact">

    <div>
      <img src={kevin} />
      <img image={jordane} />
      <img image={sandrine} />
      <img image={julien} />
    </div>
      <div className="kikiVeuContact__wrapper">
        <h2 className="kikiVeuContact__item"><Mail />Pour contacter la team KikiVeu :</h2>
        <p className="kikiVeuContact__item">kikiveu.contact@gmail.com</p>
      </div>
      <PreviousButton />
    </div>
  );

export default KikiVeuContact;
