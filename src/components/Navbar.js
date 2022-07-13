import "./NavbarStyles.css"

import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, btnClick] = useState(false);
    const handleClick = () => btnClick(!click);
        return (
        <div className="header">
            <Link to="/">
                <h1>Cynthia<span class="highlight">Godoy</span></h1>
            </Link> 
            <ul className={click ? "navbar active" : "navbar"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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