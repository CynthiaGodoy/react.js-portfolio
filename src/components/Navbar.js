import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-scroll";
// className={({ isActive }) => (isActive ? activeLink : normalLink)}

import { FaBars, FaTimes } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
// import AboutMe from "./AboutMe";

const Navbar = () => {
    //ACTIVE NAVBAR LINK
    // const activeLink = "text-chocolate";
    // const normalLink = "";
    //OPEN AND CLOSE HAMBURGER NAVBAR
    const [click, btnClick] = useState(false);
    const handleClick = () => btnClick(!click);
    const closeMenu = () => btnClick(false)

        return (
        <div className="header">
            <Link to="home">
                <h1>Cynthia<span class="highlight">Godoy</span></h1>
            </Link> 
            <ul className={click ? "navbar active" : "navbar"}>
                <li><Link to="home" spy={true} smooth={true} offset={15} duration={500} onClick={closeMenu}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={15} duration={500} onClick={closeMenu}>About</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={15} duration={500} onClick={closeMenu}>Skills</Link></li>
                
                <div className="dropdown">
                    <button className="dropbtn">Portfolio<i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <li><Link to="front-end" spy={true} smooth={true} offset={15} duration={500} onClick={closeMenu} className="hvr-icon-forward links"><MdPlayArrow size={16} style={{ color: "chocolate", marginRight: ".75rem" }} className="hvr-icon" />with Front End</Link></li>
                            <li><Link to="back-end" spy={true} smooth={true} offset={15} duration={500} onClick={closeMenu} className="hvr-icon-forward links"><MdPlayArrow size={16} style={{ color: "chocolate", marginRight: ".75rem" }} className="hvr-icon" />Back End & CLI's</Link></li>
                        </div>
                </div>

                <li><Link to="contact" spy={true} smooth={true} offset={-115} duration={500} onClick={closeMenu}>Contact</Link></li> 
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                <FaTimes size={20} style={{ color: "#333" }} />
                ) : (
                <FaBars size={20} style={{ color: "#333" }} />
                )}
            </div>
        </div>
      
  );
};

export default Navbar;
