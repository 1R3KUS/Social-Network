import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

function MyPosts(props) {
  return (
    <div>
      My post
      <div>
        New post
    </div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>{props.buttonMessage}</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, this is my props" />
        <Post message="This is another props" />
        <Post message="And this is third props" />
      </div>
    </div>
  )
}

export default MyPosts;