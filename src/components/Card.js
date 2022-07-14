import "./WorkStyles.css";
import Work from "./Work";
import CardData from "./CardData";

import React from 'react';

//CREATES A CARD FRAME
const Card = () => {
    return (
    <div className="work-container">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="info">Some of our work</p>
        <div className="portfolio-container">
            {/* <div className="portfolio-card"> */}
                {CardData.map((val, ind) => {
                    return (
                        <Work
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            liveURL={val.liveURL}
                            github={val.github}
                        />
                    );
                })}
        </div>
    </div>
    )
}

export default Card;
