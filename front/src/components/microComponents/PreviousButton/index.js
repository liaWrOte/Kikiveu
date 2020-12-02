import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

import './index.scss';

const PreviousButton = () => {
  const history = useHistory();
  return (
    <button type="button" onClick={history.goBack} className="previousButton">
      <ArrowLeft />
    </button>
  );
};

export default PreviousButton;
