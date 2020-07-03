import React from 'react';
import s from './../Dialogs.module.css';



function Message(props) {
  return (
    <div className={s.message}><img src={props.avatar} alt="ava" className={s.avaImg}/>{props.message}</div>
    
  )
}

export default Message;