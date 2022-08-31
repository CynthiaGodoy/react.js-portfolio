// FRONT END PORTFOLIO GRID ---------------
import "./WorkGridStyles.css";
import Work from "./Work";
import CardData from "./CardData";

import React from 'react';

//CREATES A CARD FRAME
const Card = () => {
    return (
    <div className="work-container" id="portfolio-frontend">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="info">with front-end</p>
        <div className="frontend-container">
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
