import "./SkillsStyles.css";

import Cloud from "../assets/cloud.png"
import Coding from "../assets/coding.png"
import Database from "../assets/database.png"
import Program from "../assets/programs.png"
import Theory from "../assets/theory2.png"
import Hosting from "../assets/hosting2.png"

import React from 'react'
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <div className="top" id="skills">
            <h1 className="skills-heading">Skills</h1>
            <p className="info">Education | Knowledge</p>
                <div className="skills-container">

                    <div clasName="skill">
                        <Fade top opposite >
                            <img src={ Cloud } className="skill-icon" alt="blue cloud icon"/>
                        </Fade>
                            <h5>Cloud Management | Deployment</h5>
                            <h6>GitHub, GitLab & GitBash. Currently studying for the AWS Cloud Architect Exam.</h6>
                    </div>

                    <div className="skill">
                        <Fade top opposite >
                            <img src={ Coding } className="skill-icon" alt="coding on a keyboard icon"/>
                        </Fade>
                            <h5>Coding | Programming</h5>
                            <h6>Browser based technology including: HTML5, CSS3, JavaScript, & JQuery.</h6>
                    </div>
                    
                    <div className="skill">
                        <Fade top opposite >
                            <img src={ Database } className="skill-icon" alt="database icon"/>
                        </Fade>
                            <h5>Server-Side | Database</h5>
                            <h6>Express.js, Node.js, React.js, MongoDB, MERN Stack, & MySQL</h6>
                    </div>
                    
                    <div className="skill">
                        <Fade top opposite >
                            <img src={ Program } className="skill-icon" alt="program icon"/>
                        </Fade>
                            <h5>Programs</h5>
                            <h6>Relevant programs VsCode, Dreamweaver, Adobe Creative Suite, & Google Suites.</h6>
                    </div>
                    
                    <div className="skill">
                        <Fade top opposite >
                            <img src={ Theory } className="skill-icon" alt="theory icon"/>
                        </Fade>
                            <h5>Methods</h5>
                            <h6>Progressive Web Apps, Agile Methodology, Computer Science & Database Theory.</h6>
                    </div>
                    
                    <div class="skill">
                        <Fade top opposite >
                            <img src={ Hosting } className="skill-icon" alt="web hosting icon"/>
                        </Fade>
                            <h5>Hosting</h5>
                            <h6>Manage DNS, IP, & Hosting, SSL Cert. for HTTPS, Remove SQL Injections, & Google Webmaster Tools.</h6>
                    </div>
                </div>
        </div>
    )
}

export default Skills;
