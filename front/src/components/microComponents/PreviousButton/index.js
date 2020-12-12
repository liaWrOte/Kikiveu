import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';

import './index.scss';

const PreviousButton = () => {
  const history = useHistory();
  return (
    <button type="button" onClick={history.goBack} className="previousButton">
      <ChevronLeft size={30} stroke-width={3} width={30} height={38} />
    </button>
  );
};

export default PreviousButton;
