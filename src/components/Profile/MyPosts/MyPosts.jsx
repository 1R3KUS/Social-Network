import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

function MyPosts(props) {

  

  let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

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
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;