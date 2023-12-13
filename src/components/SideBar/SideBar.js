import React from 'react';
import './sideBar.css';
import Menu from '../Menu/Menu';


const SideBar = (props) => {
  
  return (
    <div className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu style_menuItem="incolumn"/>
    </div>
  );
};

export default SideBar;