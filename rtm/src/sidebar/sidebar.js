// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import './sidebar.css';
const Sidebar = () => {
  return (<div>
    <div className="sidebar">
    <div className="Hamburger_icon">
    <FaIcons.FaBars className="sidebar_icon" />
    </div>
    <ul className="menu">
      <li className="sidebar_home">
        <a href="/home" >
        <AiIcons.AiFillHome className="sidebar_Home_icon"/>
        <span>Home</span>
        </a>
      </li>
      <li className="logout">
        <a href="/home">
        <BiIcons.BiLogOutCircle  />
        <span>Logout</span>
        </a>
      </li>
    </ul>
    </div>
  </div>);
};

export default Sidebar;