import React from 'react';

import './index.scss';

const MainUserButton = (
  avatar,
) => {
  const sectionStyle = {
    backgroundImage: `url(${avatar})`,
  };
  return (

    <div className="mainUserButton" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default MainUserButton;
