import React from 'react';

import './index.scss';

import tree from '../../../assets/images/ride_icon.png';

const RideButton = () => {
  const sectionStyle = {
    backgroundImage: `url(${tree})`,
  };
  return (
    <div className="rideButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default RideButton;
