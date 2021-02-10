import React from 'react';

import './index.scss';

const CommentAvatar = ({ profileImage }) => {
  const sectionStyle = {
    backgroundImage: `url(https://www.kikiveuapp.me/back/avatar/${profileImage})`,
  };
  return (

    <div className="commentAvatar" style={sectionStyle} alt="chien avec des lunettes" />
  );
};

export default CommentAvatar;
