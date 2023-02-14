import "./FooterStyles.css";

import React from "react";
import { Link } from "react-scroll";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaReact, FaBootstrap, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiApollographql, SiMysql, SiInsomnia, SiSequelize, SiHeroku, SiJquery } from "react-icons/si";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-container">
                
                <div className="contactInfo">
                    <h4>Get in Touch! </h4>
                    <div className="location">
                        <FaHome size={18} style={{ color: "white", marginRight: "1rem" }} /><p>Denver, Colorado</p>
                    </div>
                    <div className="phone">
                        <FaPhone size={18} style={{ color: "white", marginRight: "1rem" }} /><p>(720) 454-5143</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={18} style={{ color: "white", marginRight: "1rem" }} /><p>cynthia@ck-interiors.com</p>
                    </div>
                    <Fade left big>
                    <div className="ccIcons">
                        <FaReact size={30} style={{ color: "#61DBFB", marginRight: "1rem" }} />
                        <FaBootstrap size={30} style={{ color: "#563d7c", marginRight: "1rem" }} />
                        <FaNodeJs size={30} style={{ color: "#215732", marginRight: "1rem" }} />
                        <SiMongodb size={30} style={{ color: "#4FA83D", marginRight: "1rem" }} />
                        <FaHtml5 size={30} style={{ color: "#e34c26", marginRight: "1rem" }} />
                        <FaCss3Alt size={30} style={{ color: "#264de4", marginRight: "1rem" }} />
                        <div>
                        <SiApollographql size={30} style={{ color: "#112B49", marginRight: "1rem" }} />
                        <SiMysql size={30} style={{ color: "#00758f", marginRight: "1rem" }} />
                        <SiInsomnia size={30} style={{ color: "#6400d7", marginRight: "1rem" }} />
                        <SiSequelize size={30} style={{ color: "#2f406a", marginRight: "1rem" }} />
                        <SiHeroku size={30} style={{ color: "#6762A6", marginRight: "1rem" }} />
                        <SiJquery size={30} style={{ color: "#0769ad", marginRight: "1rem" }} />
                    </div></div>
                    </Fade>
                </div>

                <div className="navigation">
                    <h4>Navigation </h4>

                    <div className="nav-container">
                        <div className="navigation-left">
                            <p><Link to="home" smooth className="hvr-bounce-in">Home</Link></p>
                            <p><Link to="about" smooth className="hvr-bounce-in">About | Bio</Link></p>
                            <p><a href="https://docs.google.com/document/d/1zshhqrUmAzJLudyaYYTx1DxAvxO0VvyptTcPJXK5vIw/edit?usp=sharing" target="_blank" rel="noreferrer" className="hvr-bounce-in">Download Resume</a></p>
                            <p><Link to="skills" smooth className="hvr-bounce-in">Developer Skills</Link></p>
                            
                        </div>
                        
                        <div className="navigation-right">
                            <p><Link to="front-end" smooth className="hvr-bounce-in">Front End | Full Stack</Link></p>
                            <p><Link to="back-end" smooth className="hvr-bounce-in">Back End & CLI's</Link></p>
                            <p><Link to="contact" smooth className="hvr-bounce-in">Contact Info</Link></p>
                        </div>
                    </div>
                </div>

                <div className="social">
                    <h4>Social Media | More About Me </h4>
                    <p><span className="highlight">From Interior Designer to Software Developer.</span></p>
                    <p>Educated in full-stack development from the University of Denver.</p>
                    <Fade right big>
                        <div className="socialIcon">
                            <a href="https://www.linkedin.com/in/cynthia-godoy-ncidq-96951845/" className="hvr-bounce-in linkedin" target="_blank" rel="noreferrer">
                                <FaLinkedin size={36} style={{ marginRight: ".2rem", }} />
                            </a>
                        
                            <a href="https://github.com/CynthiaGodoy" className="hvr-bounce-in github" target="_blank" rel="noreferrer">
                                <FaGithub size={36} style={{ marginRight: ".2rem" }} />
                            </a>
                        </div>
                        </Fade>
                </div>

            </div>
        </div>
    )
}

export default Footer;