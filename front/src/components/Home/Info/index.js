import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import composants
import Toggle from '../../microComponents/Toggle';
import MainUserButton from '../../microComponents/MainUserButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = ({
  avatar,
  status,
  ride,
  coords,
  changeStatus,
}) => (
  <div className="info">
    <div>
      <label htmlFor="status">En ligne
        <Toggle
          onChange={changeStatus}
          id="status"
          name="status"
        />
      </label>
    </div>
    <Link to="/1"><MainUserButton className="info__mainUserButton" avatar={avatar} /></Link>
    <Link to="/creer-balade"><SecondaryUserButton /></Link>
  </div>
);

Info.propTypes = {
  avatar: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default Info;
