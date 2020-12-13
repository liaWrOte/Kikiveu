import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import composants
import Toggle from '../../microComponents/Toggle';
import MainUserButton from '../../microComponents/MainUserButton';
import RideButton from '../../microComponents/RideButton';
import { HelpCircle } from 'react-feather';

import './info.scss';

const Info = ({
  avatar,
}) => (
  <div className="info">
    <Link to="/1/messages"><p>Messages</p></Link>
    <Link to="/profil"><MainUserButton avatar={avatar} /></Link>
    <Link to="/contact"><HelpCircle className="header__icone" stroke-width={2} width={27} height={27} /></Link>
    <Link to="/creer-balade"><RideButton /></Link>
  </div>
);

Info.propTypes = {
  avatar: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default Info;
