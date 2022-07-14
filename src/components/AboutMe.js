import "./AboutMeStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import myPicture from "../assets/CG.png";

import { FaArrowDown, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="top">
            <h1 className="about-heading">About</h1>
                <p className="info">WHO AM I?</p>
            <div className="about-container">
                <div className="Bio">
                    <h1>Bio</h1>
                    <p>Cynthia is a strong business professional with experience in the Architecture and Interior Design industry. With over 10 years of running her own business, she is highly skilled in AutoCAD, Adobe Photoshop, GSuites, and Communications. Unsatisfied with the cost of web development, Cynthia was determined to learn Adobe Dreamweaver to figure out how to manipulate HTML, CSS, Javascript. With a lot of determination, and 5 websites later, she was finally excited about her business website.</p>
                    <p>A little bored with interiors, Cynthia enrolled herself in University of Denver's Full-Stack Development course, for the challenge and to gain more understanding of the tools used for programming. Cynthia’s ability to manage several projects at once and a strong desire to continue learning makes her a strong candidate for a Developer position.</p>
                        {/* <Link to="/">
                            <button className="btn">Resume <FaArrowDown size={16} style={{ color: "white", marginRight: ".75rem" }} /></button>
                        </Link> */}
                </div>
                <div className="my-picture">
                    <div className="about-img">
                        <img src={myPicture} className="img" alt="true"/>
                        </div>
                        <div className="resume">
                            <Link to="/"><button className="btn">Resume <FaArrowDown size={16} style={{ color: "white", marginRight: ".75rem" }} /></button></Link>
                            <FaLinkedin size={40} style={{ color: "#333", marginRight: ".75rem" }} />
                            <FaGithub size={40} style={{ color: "#333", marginRight: ".75rem" }} />
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe;