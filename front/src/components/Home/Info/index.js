import React from 'react';

import { Link } from 'react-router-dom';

// Import composants
import Toggle from '../../microComponents/Toggle';
import MainUserButton from '../../microComponents/MainUserButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './info.scss';

const Info = (
  changeField,
) => {
  return (
    <div className="info">
      <div>
        <label htmlFor="status">En ligne
          <Toggle
            onChange={changeField}
            id="status"
            name="status"
          />
        </label>
      </div>
      <Link to="/1"><MainUserButton className="info__mainUserButton" /></Link>
      <Link to="/creer-balade"><SecondaryUserButton /></Link>
    </div>
  );
}



export default Info;
