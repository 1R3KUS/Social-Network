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

  let dialogs = [
    { id: 1, name: 'Abu' },
    { id: 2, name: 'Abdulla' },
    { id: 3, name: 'Adam' },
    { id: 4, name: 'Seyf' },
    { id: 5, name: 'Halid' },
    { id: 6, name: 'Shamil' }
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi!' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I\'m fine!' }
  ]


  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)



  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;