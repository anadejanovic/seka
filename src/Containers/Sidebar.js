import React, { Component } from 'react';
import './Sidebar.css';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const SidebarItem = (prop) => {
  return (
    <div className="sidebar-item h2 my-2">
      <NavLink exact to={prop.link} activeStyle={{ textDecoration: "underline", textDecorationColor: "#F5D321" }}>
        {prop.name}
      </NavLink>  
    </div>
  );
}

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} height="290px" width="250px" alt="logo" />
    </div>
  )
}


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar d-flex flex-column ml-3 text-center">
        <Logo />
        <SidebarItem link="/seka" name="artwork" />
        <SidebarItem link="/about" name="about" />  
        <SidebarItem link="/contact" name="contact" />
        <div className="copyright mb-4 text-center">
            All images &#169; Ana Dejanović
          </div>
      </div>
    );
  }
}

export default Sidebar;