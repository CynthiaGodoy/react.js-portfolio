// FRONT END PORTFOLIO GRID ---------------
import { CardData } from "./CardData";
import "./WorkGridStyles.css";
import Work from "./Work";

import React, { useEffect, useState } from 'react';
import $ from "jquery";

//CREATES A CARD FRAME
function Card() {

    const [data, setData] = useState([]);
	const [collection, setCollection] = useState([]);

    useEffect(() => {
			setData(CardData); 
            setCollection([...new Set(CardData.map((item)=> item.type))])
		},[])

    const gallery_filter = (itemData) =>{
        const filterData = CardData.filter((item)=> item.type === itemData);
        setData(filterData);
    }

    $(".nav-btn").on("click", function () {
        $(".nav-btn").removeClass("active");
        $(this).addClass("active");
        });
    
    return (
    <div className="work-container">
        <section id="front-end">
            <h1 className="portfolio-heading">Portfolio</h1>
            <p className="info-front">with front-end</p>
            <div className="filterItem">
                <ul className="nav-link">
                    <button className="nav-btn" onClick={()=> setData(CardData)}>All</button>
                        {collection.map((item)=> 
                            <button className="nav-btn" onClick={()=>{gallery_filter(item)}}>{item}</button>)}
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
        </section>
    </div>
    )
}

export default Card;
