import "./WorkGridStyles.css";

import React from 'react';

const Work = (props) => {
    return (
        <div className="frontend-card">
            <img src={props.imgsrc} className="background-frontend" alt={props.alt} />

            <div className="overlay-frontend">
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

// const Work = (props) => {
//     return (
//         <div className="card-frontend">
//             <img src={props.imgsrc} className="card-img" alt={props.alt} />

//                 <div className="card-text">
//                     <h2 className="title">{props.title}</h2>
//                     <p className="description">{props.description}</p>
//                     </div>

//                     <div className="portfolio-btns">
//                         <a href={props.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
//                     </div>
//         </div>
//     )
// }

// export default Work;

//<NavLink to={props.liveURL} target="_blank" className="btn-dark">Live URL</NavLink>
//<NavLink to={props.github} target="_blank" className="btn">GitHub</NavLink>
