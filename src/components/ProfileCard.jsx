// Example structure for ProfileCard.jsx
import React from 'react';

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt={user.name} className="profile-avatar" />
      <div className="profile-name">{user.name}</div>
      <div className="profile-role">{user.role}</div>
      <div className="profile-location">{user.location}</div>
      <div className="profile-email">{user.email}</div>
      {/* Optional button */}
      <button>Contact</button>
    </div>
  );
}

export default ProfileCard;