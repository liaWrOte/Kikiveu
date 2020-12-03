import React from 'react';

import './index.scss';

import profileImage from '../../../assets/images/dog_profile.jpg';

const SecondaryUserButton = () => {
  const sectionStyle = {
    backgroundImage: `url(${profileImage})`,
  };
  return (

    <div className="secondaryUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default SecondaryUserButton;
