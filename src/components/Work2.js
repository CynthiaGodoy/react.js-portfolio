import "./WorkStyles.css";
import React from "react";

// PORTFOLIO CARD LAYOUT----------------------
const Work2 = (props) => {
    return (
        <div className="portfolio-card">
            <div className="img img-hover-zoom">
                <img src={props.imgsrc} className="card-img" alt={props.alt} />
            </div>
                <h2 className="title">{props.title}</h2>
                    <div className="description">
                        <p>{props.description}</p>
                            <div className="portfolio-btns">
                                <a href={props.github} target="_blank" rel="noreferrer" className="btn hvr-rectangle-out">GitHub</a>
                            </div>
                    </div>
        </div>
    );
}

export default Work2;
