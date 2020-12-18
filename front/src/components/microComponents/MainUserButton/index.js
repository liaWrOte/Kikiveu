import React from 'react';
import PropTypes from 'prop-types';

import defaultAvatar from '../../../assets/images/dog_profile.jpg';

import './index.scss';

const MainUserButton = ({
  image,
}) => {
  const sectionStyle = {
    backgroundImage: `url(http://www.kikiveu.me/back/avatar/${image})`,
  };
  return (

    <div className="mainUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

MainUserButton.propTypes = {
  image: PropTypes.string,
};

// Valeurs par défaut pour les props
MainUserButton.defaultProps = {
  image: { defaultAvatar },
};

export default MainUserButton;
