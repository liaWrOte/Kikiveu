import React from 'react';
import { Calendar } from 'react-feather';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import './ride.scss';

const Ride = () => (
  <div className="ride">
    <MainUserButton className="ride__mainUserButton" />
    <p>
      Une balade folle entre chiots est prévue pour permettre à nos loulous de se défouler !
      Ramenez vos jouets !
    </p>
    <p>
      <Calendar /> Le vendredi 27/11/20 à 15h00
    </p>
    <p>
      Nombre de participants maximum : 9
    </p>
    <p>
      Type de balade :
    </p>
    <div className="ride__emoji">
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
      <Emoji />
    </div>
    <p>Laisser un commentaire :
      <Input />
      <TextButton />
    </p>
    <div className="ride__bottom">
      <PreviousButton />
    </div>
  </div>

);

export default Ride;
