import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import composants
import Toggle from '../../microComponents/Toggle';
import MainUserButton from '../../microComponents/MainUserButton';
import RideButton from '../../microComponents/RideButton';
import { HelpCircle } from 'react-feather';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = ({
  avatar,
  hasRide,
}) => (
  <div className="info">
    <Link to="/contact"><HelpCircle className="header__icone" stroke-width={2} width={27} height={27} /></Link>
    {!hasRide && (
      <Link to="/creer-balade"><RideButton /></Link>
    )}
    {hasRide && (
      <Link to="/ma-balade"><RideButton /></Link>
    )}
    <Link to="/profil"><SecondaryUserButton profileImage={avatar} /></Link>
  </div>
);

Info.propTypes = {
  avatar: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  hasRide: PropTypes.bool.isRequired,
};

export default Info;
