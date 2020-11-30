import React from 'react';

import './index.scss';

import profileImage from '../../../assets/images/dog_profile.jpg';

const MainUserButton = () => {
  const sectionStyle = {
    backgroundImage: `url(${profileImage})`,
  };
  return (

    <div className="mainUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default MainUserButton;
