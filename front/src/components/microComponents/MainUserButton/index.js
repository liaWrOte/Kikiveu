import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const MainUserButton = ({
  avatar,
}) => {
  const sectionStyle = {
    backgroundImage: `url(${avatar})`,
  };
  return (

    <div className="mainUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

MainUserButton.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default MainUserButton;
