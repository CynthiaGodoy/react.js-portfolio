import "./AboutMeStyles.css";

import React from 'react';
import myPicture from "../assets/CG.png"; 


import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="container" id="about">
            <h1 className="about-heading">About</h1>
                <p className="info">A little bit of history</p>
            <div className="about-container">

                <div className="Bio">
                    <h1>Bio</h1>
                    <p>Cynthia is a strong business professional with experience in the Architecture and Interior Design industry. With over 10 years of running her own business, she is highly skilled in AutoCAD, Adobe Photoshop, GSuites, and Project Management. Unsatisfied with the cost of web development, Cynthia was determined to learn Adobe Dreamweaver to figure out how to manipulate HTML, CSS, Javascript. With a lot of determination, and 5 websites later, she was finally excited about her business website.</p>
                    <p>A little bored with interiors, Cynthia enrolled herself in University of Denver's Full-Stack Development course, for the challenge and to gain more understanding of the tools used for programming. Cynthia’s ability to manage several projects at once and a strong desire to continue learning makes her a strong candidate for a Developer position.</p>
                </div>

                <div className="my-picture">
                    <div className="about-img">
                        <img src={myPicture} className="img" alt="Cynthia"/>
                    </div>
                    <div className="resume">
                        <a href="https://docs.google.com/document/d/1zshhqrUmAzJLudyaYYTx1DxAvxO0VvyptTcPJXK5vIw/edit?usp=sharing" target="_blank" rel="noreferrer"><button className="hvr-icon-wobble-vertical hvr-rectangle-out btn">Resume <FaDownload size={16} style={{ color: "white", marginRight: ".75rem" }} className="hvr-icon resumeArrow" /></button></a>
                        <a href="https://www.linkedin.com/in/cynthia-godoy-ncidq-96951845/" className="hvr-bounce-in about-linkedin" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} style={{ marginRight: ".75rem" }} />
                        </a>
                        <a href="https://github.com/CynthiaGodoy" className="hvr-bounce-in about-github" target="_blank" rel="noreferrer">
                            <FaGithub size={40} style={{ marginRight: ".75rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
