import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const PreviousButton = () => (
  <button type="button" onClick={useHistory.goBack} className="previousButton">
    Back
  </button>
);

export default PreviousButton;
