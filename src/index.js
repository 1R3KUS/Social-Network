import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, this is my props', likesCount: 12 },
  { id: 2, message: 'This is another props', likesCount: 15 },
  { id: 3, message: 'And this is third props', likesCount: 6 },
  { id: 4, message: 'This is Amazing bro', likesCount: 594 }
]

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
