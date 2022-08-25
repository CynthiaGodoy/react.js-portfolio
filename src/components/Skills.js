import "./SkillsStyles.css";

import Cloud from "../assets/cloud.jpg"
import Coding from "../assets/coding.jpg"
import Database from "../assets/database.jpg"
import Program from "../assets/programs.jpg"
import Theory from "../assets/theory.jpg"
import Hosting from "../assets/hosting.jpg"

import React from 'react'

const Skills = () => {
    return (
        <div className="top" id="skills">
            <h1 className="skills-heading">Skills</h1>
            <p className="info">Education | Knowledge</p>
                <div className="skills-container">

                    <div clasName="skill">
                        <img src={ Cloud } className="skill-icon" alt="blue cloud icon"/>
                        <h5>Cloud Management | Deployment</h5>
                        <h6>GitHub, GitLab & GitBash. Currently studying for the AWS Cloud Architect Exam.</h6>
                    </div>

                    <div className="skill">
                        <img src={ Coding } className="skill-icon" alt="coding on a keyboard icon"/>
                        <h5>Coding | Programming</h5>
                        <h6>Browser based technology including: HTML5, CSS3, JavaScript, & JQuery.</h6>
                    </div>

                    <div className="skill">
                        <img src={ Database } className="skill-icon" alt="database icon"/>
                        <h5>Server-Side | Database</h5>
                        <h6>Express.js, Node.js, React.js, MongoDB, MERN Stack, & MySQL</h6>
                    </div>

                    <div className="skill">
                        <img src={ Program } className="skill-icon" alt="program icon"/>
                        <h5>Programs</h5>
                        <h6>Relevant programs VsCode, Dreamweaver, Adobe Creative Suite, & Google Suites.</h6>
                    </div>

                    <div className="skill">
                        <img src={ Theory } className="skill-icon" alt="theory icon"/>
                        <h5>Methods</h5>
                        <h6>Progressive Web Apps, Agile Methodology, Computer Science & Database Theory.</h6>
                    </div>

                    <div class="skill">
                        <img src={ Hosting } className="skill-icon" alt="web hosting icon"/>
                        <h5>Hosting</h5>
                        <h6>Manage DNS, IP, & Hosting, SSL Cert. for HTTPS, Remove SQL Injections, & Google Webmaster Tools.</h6>
                    </div>
                </div>
        </div>
    )
}

export default Skills;