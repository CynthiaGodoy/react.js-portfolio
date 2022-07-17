import "./WorkStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";

const Work = (props) => {
    return (
    // <div className="work-container">
    //     <h1 className="portfolio-heading">Portfolio</h1>
    //     <p className="info">Some of our work</p>

        // <div className="portfolio-container">
            <div className="portfolio-card">
                <img src={props.imgsrc} alt={props.alt} />
                        <h2 className="title">{props.title}</h2>
                        <div className="description">
                            <p>{props.description}</p>
                                <div className="portfolio-btns">
                                    <NavLink to={props.liveURL} className="btn-dark">Live URL</NavLink>
                                    <NavLink to={props.github} className="btn">GitHub</NavLink>
                                </div>
                        </div>
            </div>
    )
}

export default Work;