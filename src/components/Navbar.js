import "./NavbarStyles.css";

import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { FaBars, FaTimes } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

const Navbar = () => {
    const [click, btnClick] = useState(false);
    const handleClick = () => btnClick(!click);
        return (
        <div className="header">
            <Link to="/">
                <h1>Cynthia<span class="highlight">Godoy</span></h1>
            </Link> 
            <ul className={click ? "navbar active" : "navbar"}>
                <li><Link to="/#home" className="active" smooth>Home</Link></li>
                <li><Link to="/#about" smooth>About</Link></li>
                <li><Link to="/#skills" smooth>Skills</Link></li>
                
                <div class="dropdown">
                    <button class="dropbtn">Portfolio<i class="fa fa-caret-down"></i></button>
                        <div class="dropdown-content">
                            <li><Link to="/#portfolio-frontend" className="hvr-icon-forward" smooth><MdPlayArrow size={16} style={{ color: "chocolate", marginRight: ".75rem" }} className="hvr-icon" />with Front End</Link></li>
                            <li><Link to="/#portfolio-backend" className="hvr-icon-forward" smooth><MdPlayArrow size={16} style={{ color: "chocolate", marginRight: ".75rem" }} className="hvr-icon" />Back End only</Link></li>
                        </div>
                </div>

                <li><Link to="/contact" smooth>Contact</Link></li>
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
