import React from 'react';
import PropTypes from 'prop-types';


import './index.scss';

const MainUserButton = ({
  avatar,
}) => {
  const sectionStyle = {
    backgroundImage: `url(https://www.kikiveu.me/back/avatar${avatar})`,
  };
  return (

    <div className="mainUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

MainUserButton.propTypes = {
  avatar: PropTypes.string,
};

// Valeurs par défaut pour les props
MainUserButton.defaultProps = {
  avatar: '',
};

export default MainUserButton;
