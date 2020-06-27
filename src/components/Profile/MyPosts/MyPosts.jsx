import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

function MyPosts(props) {
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
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