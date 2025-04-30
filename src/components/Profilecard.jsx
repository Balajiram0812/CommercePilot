import React from 'react';

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
  maxWidth: '300px',
};

const iconStyle = {
  fontSize: '28px',
  marginRight: '12px',
  color: '#555',
};

const nameStyle = {
  fontWeight: '600',
  color: '#333',
};

const titleStyle = {
  color: '#777',
  fontSize: '14px',
};

const ProfileCard = ({ name, title }) => (
  <div style={cardStyle}>
    <div style={iconStyle}>👤</div>
    <div>
      <div style={nameStyle}>{name}</div>
      <div style={titleStyle}>{title}</div>
    </div>
  </div>
);

export default ProfileCard;
