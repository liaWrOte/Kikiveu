import React from 'react';

import './index.scss';

import rideImage from '../../../assets/images/ride_icon.png';

const RideButton = () => {
  const sectionStyle = {
    backgroundImage: `url(${rideImage}`,
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    border: '5px solid white',
    boxSizing: 'border-box',
    marginTop: '-40px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderBox: 'none',
    backgroundPosition: 'center',
  };

  return (
    <div className="rideButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default RideButton;
