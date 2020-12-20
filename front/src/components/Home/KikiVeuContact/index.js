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
    <h2 className="kikiVeuContact__title">Merci la team KikiVeu !</h2>
    <div className="kikiVeuContact__team">
      <div className="kikiVeuContact__team__flex">
        <div className="kikiVeuContact__team__flex__item">
          <img src={kevin} />
          <h2 className="kikiVeuContact__team__flex__item__title">Kévin</h2>
          <p>Développeur back et Git Master</p>
        </div>
        <div className="kikiVeuContact__team__flex__item">
          <img src={jordane} />
          <h2 className="kikiVeuContact__team__flex__item__title">Jordane</h2>
          <p>Développeuse front et Scrum Master</p>
        </div>
      </div>
      <div className="kikiVeuContact__team__flex">
        <div className="kikiVeuContact__team__flex__item">
          <img src={sandrine} />
          <h2 className="kikiVeuContact__team__flex__item__title">Sandrine</h2>
          <p>Lead développeuse front et Product Owner</p>
        </div>
        <div className="kikiVeuContact__team__flex__item">
          <img src={julien} />
          <h2 className="kikiVeuContact__team__flex__item__title">Julien</h2>
          <p>Lead développeur back</p>
        </div>
      </div>
    </div>
    <a href="mailto:kikiveu.contact@gmail.com">
      <p className="kikiVeuContact__item">kikiveu.contact@gmail.com</p>
    </a>

    <PreviousButton />
  </div>
);

export default KikiVeuContact;
