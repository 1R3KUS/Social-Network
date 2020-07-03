import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

  


  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

  let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} avatar={m.avatar}/>)

  let newMessageElement = React.createRef()

  const addMessage =  () => {
    let text = newMessageElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;