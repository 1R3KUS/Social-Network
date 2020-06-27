import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile() {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts buttonMessage="This is button in MyPost" />
    </div>
  )
}

export default Profile;