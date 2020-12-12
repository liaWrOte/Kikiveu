import React from 'react';
import { Calendar } from 'react-feather';
import PropTypes from 'prop-types';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import Emoji from '../../microComponents/Emoji';
import Input from '../../microComponents/Input';
import TextButton from '../../microComponents/TextButton';

import './ride.scss';

const Ride = (
  markerLat,
  markerLng,
  description,
  tags,
  date,
  time,
  duration,
  comments,
  maxParticipants,
) => (
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
    <p>Commentaires</p>
    <p>Laisser un commentaire :
      <Input />
      <TextButton />
    </p>
    <div className="ride__bottom">
      <PreviousButton />
    </div>
  </div>

);

Ride.propTypes = {
  markerLat: PropTypes.number.isRequired,
  markerLng: PropTypes.number.isRequired,
  description: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  maxParticipant: PropTypes.number.isRequired,
};

export default Ride;
