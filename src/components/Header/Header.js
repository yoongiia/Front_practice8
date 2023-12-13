import React from 'react';
import './header.css';
import Logo from './Logo/Logo';
import logo from '../../assets/logo.png'
import DateTime from './DateTime/DateTime';


const Header = (props) => {
  return (
    <header className="header">
      <Logo src = {logo}/>
      <p>{props.title}</p>
      <DateTime/>
    </header>
  );
};

export default Header;