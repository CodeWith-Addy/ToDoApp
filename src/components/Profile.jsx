import React from 'react'
import ProfileCard from './ProfileCard';
import Users from '/public/UserData.json'

function Profile() {
  return (
    <div className="profile-list">
      {Users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Profile