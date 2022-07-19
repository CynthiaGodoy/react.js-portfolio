import "./WorkStyles.css";

import React from 'react';
// import { NavLink } from "react-router-dom";
// 
// export const openInNewTab = (url) => {
//     const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
//     if (newWindow) newWindow.opener = null;
//   };

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
                                    <a href={props.liveURL} target="_blank" rel="noreferrer" className="btn-dark">Live URL</a>
                                    <a href={props.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                                </div>
                        </div>
            </div>
    )
}

export default Work;

//<NavLink to={props.liveURL} target="_blank" className="btn-dark">Live URL</NavLink>
//<NavLink to={props.github} target="_blank" className="btn">GitHub</NavLink>
