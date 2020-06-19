import React from 'react';
import a from './Header.module.css';

function Header() {
  return (<header className={a.header}>
    <img src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png' alt='Something' />
  </header>)
};

export default Header;