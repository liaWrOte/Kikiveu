import React from 'react';

import './index.scss';


const SecondaryUserButton = ({ profileImage }) => {
  const sectionStyle = {
    backgroundImage: `url(http://www.kikiveu.me/back/avatar/${profileImage})`,
  };
  return (

    <div className="secondaryUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default SecondaryUserButton;
