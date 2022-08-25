import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
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
                        <FaMailBulk size={18} style={{ color: "white", marginRight: "1rem" }} /><p>Cynthia@ck-interiors.com</p>
                    </div>
                </div>

                <div className="social">
                    <h4>Social Media | More About Me</h4>
                    <p>From Interior Designer to Software Developer. Educated in full-stack development from the University of Denver. </p>
                        <div className="socialIcon">
                            <a href="https://www.linkedin.com/in/cynthia-godoy-ncidq-96951845/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={36} style={{ color: "white", marginRight: ".75rem" }} />
                            </a>
                            <a href="https://github.com/CynthiaGodoy" target="_blank" rel="noreferrer">
                            <FaGithub size={36} style={{ color: "white", marginRight: ".75rem" }} />
                            </a>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;