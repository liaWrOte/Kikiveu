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
    <h2 className="kikiVeuContact__title">Merci la team KikiVeu</h2>

    <div className="kikiVeuContact__team">
      <div className="kikiVeuContact__team__item">
      <img src={kevin} />
      <p>Kevin, Développeur back et Git Master</p>
      </div>
      <div className="kikiVeuContact__team__item">
      <img src={jordane} />
      <p>Jordane, développeuse front et Scrum Master</p>
      </div>
      <div className="kikiVeuContact__team__item">
      <img src={sandrine} />
      <p>Sandrine, développeuse front et Product Owner</p>
      </div>
      <div className="kikiVeuContact__team__item">
      <img src={julien} />
      <p>Julien, Lead développeur back</p>
      </div>
    </div>
      <div className="kikiVeuContact__wrapper">
        <p className="kikiVeuContact__item">kikiveu.contact@gmail.com</p>
      </div>
      <PreviousButton />
    </div>
  );

export default KikiVeuContact;
