// FRONT END PORTFOLIO GRID ---------------
import { CardData } from "./CardData";
import "./WorkGridStyles.css";
import Work from "./Work";

// import React from 'react';
import React, { useEffect, useState } from 'react';

//CREATES A CARD FRAME
// const Card = () => {

function Card() {
    const [data, setData] = useState([]);
	const [collection, setCollection] = useState([]);

    useEffect(() => {
			setData(CardData); 
            setCollection([...new Set(CardData.map((item)=> item.type))])
		},[])

    const gallery_filter = (itemData) =>{
        const filterData = CardData.filter((item)=> item.type == itemData);
        setData(filterData);
    }

    return (
    <div className="work-container" id="portfolio-frontend">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="info">with front-end</p>
        <div className="filterItem">
            <ul>
                <li><button onClick={()=> setData(CardData)}>All</button></li>
                    {collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)}
            </ul>
        </div>
            <div className="frontend-container">
                {data.map((val, ind) => {
                    return (
                        <Work
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            liveURL={val.liveURL}
                            github={val.github}
                            tag={val.tag}
                        />
                    );
                })}
            </div>
    </div>
    )
}

// const TagButton = ({ name, handleSetTag, tagActive }) => {
// 	return (
// 		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
// 			{name.toUpperCase()}
// 		</button>
// 	);
// };

export default Card;
