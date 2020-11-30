import React from 'react';

import './index.scss';

import profileImage from '../../../assets/images/dog_profile.jpg';

const UserOnMap = () => {
  const sectionStyle = {
    backgroundImage: `url(${profileImage})`,
  };
  return (

    <div className="userOnMap" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default UserOnMap;
