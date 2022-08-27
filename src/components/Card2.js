import "./WorkStyles.css";
import Work2 from "./Work2";
import CardData from "./CardData2";

import React from 'react';

//CREATES A CARD FRAME
const Card2 = () => {
    return (
    <div className="work-container" id="portfolio-backend">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="info">Back-End Only</p>
        <div className="portfolio-container">
                {CardData.map((val, ind) => {
                    return (
                        <Work2
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            github={val.github}
                        />
                    );
                })}
        </div>
    </div>
    )
}

export default Card2;
