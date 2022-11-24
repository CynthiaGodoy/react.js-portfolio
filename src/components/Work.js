import "./WorkGridStyles.css";

import React from 'react';
import Fade from 'react-reveal/Fade';

const Work = (props) => {
    return ( 
        <div className="combine">
            
            <div className="frontend-card img-hover-zoom--zoom-n-rotate">
                <a href={props.liveURL} target="_blank" rel="noreferrer">
                    <img src={props.imgsrc} className="background-frontend" alt={props.alt}/>
                </a>
                <Fade bottom opposite> 
                    <div className="overlay-frontend hide">
                        <h2 className="frontend-title">{props.title} </h2>
                        <p className="frontend-description">{props.description}</p>
                    </div> </Fade >

                    <div className="frontend-btns">
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn hvr-rectangle-out">GitHub</a>
                    </div>
            </div>
        </div>
    )
}

export default Work;
