import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

function MyPosts() {
  return (
    <div>
      My post
      <div>
        New post
    </div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;