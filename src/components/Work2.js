import "./WorkStyles.css";

import React from 'react';

const Work2 = (props) => {
    return (
            <div className="portfolio-card">
                <img src={props.imgsrc} alt={props.alt} />
                        <h2 className="title">{props.title}</h2>
                        <div className="description">
                            <p>{props.description}</p>
                                <div className="portfolio-btns">
                                    <a href={props.github} target="_blank" className="btn">GitHub</a>
                                </div>
                        </div>
            </div>
    )
}

export default Work2;
