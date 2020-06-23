import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='Something' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts buttonMessage="This is button in MyPost"/>
    </div>
  )
}

export default Profile;