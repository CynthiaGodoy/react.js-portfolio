import "./WorkGridStyles.css";

import React from 'react';

const Work = (props) => {
    return (
        <div className="frontend-card img-hover-zoom--zoom-n-rotate">

<a href={props.liveURL} target="_blank" rel="noreferrer">
            <img src={props.imgsrc} className="background-frontend" alt={props.alt}/>
</a>

                <div className="overlay-frontend hide">
                    <h2 className="frontend-title">{props.title}</h2>
                    <p className="frontend-description">{props.description}</p>
                </div>

            <div className="frontend-btns">
                <a href={props.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
            </div>
        </div>
    )
}

export default Work;
