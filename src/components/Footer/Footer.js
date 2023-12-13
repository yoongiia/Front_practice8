import React from 'react';
import './footer.css';
import Menu from '../Menu/Menu';



const Footer = (props) => {
  return (
    <footer className="footer">
      <p>{props.title}</p>
      <Menu style_menuItem="inline"/>
    </footer>
  );
};

export default Footer;