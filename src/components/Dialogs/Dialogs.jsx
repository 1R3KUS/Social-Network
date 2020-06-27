import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

function Message(props) {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Abu' id='1' />
        <DialogItem name='Abdulla' id='2' />
        <DialogItem name='Adam' id='3' />
        <DialogItem name='Seyf' id='4' />
        <DialogItem name='Halid' id='5' />
        <DialogItem name='Shamil' id='6' />
      </div>

      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='Hi!'/>
        <Message message='How are you?'/>
      </div>
    </div>
  )
}

export default Dialogs;