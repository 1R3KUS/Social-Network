import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Abu</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Abdulla</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Adam</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Seyf</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Halid</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/6'>Shamil</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
      </div>
    </div>
  )
}

export default Dialogs;