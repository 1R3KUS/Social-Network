import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}><img src={props.avatar} alt="ava" className={s.avaImg}/>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;