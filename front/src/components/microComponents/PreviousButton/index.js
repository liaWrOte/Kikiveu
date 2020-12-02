import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const PreviousButton = () => {
  const history = useHistory();
  return (
    <button type="button" onClick={history.goBack} className="previousButton">
      Back
    </button>
  );
};

export default PreviousButton;
