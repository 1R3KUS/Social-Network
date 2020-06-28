import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

function MyPosts(props) {

  let posts = [
    { id: 1, message: 'Hi, this is my props', likesCount: 12 },
    { id: 2, message: 'This is another props', likesCount: 15 },
    { id: 3, message: 'And this is third props', likesCount: 6 },
    { id: 4, message: 'This is Amazing bro', likesCount: 594 }
  ]

  let postsElements = posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

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