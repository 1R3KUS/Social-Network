import React from 'react';
import s from'./Dialogs.module.css';


function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Abu
        </div>
        <div className={s.dialog}>
          Abdulla
        </div>
        <div className={s.dialog}>
          Adam
        </div>
        <div className={s.dialog}>
          Seyf
        </div>
        <div className={s.dialog}>
          Halid
        </div>
        <div className={s.dialog}>
          Shamil
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