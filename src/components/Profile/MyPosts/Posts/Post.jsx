import React from 'react';
import s from './Post.module.css'

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/c4/9a/30/c49a305374ed91165de34485c868be5c.jpg" alt="f" />
          {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  )
}

export default Post;