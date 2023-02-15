// FRONT END PORTFOLIO GRID ---------------
import { CardData } from "./CardData";
import "./WorkGridStyles.css";
import Work from "./Work";

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// {click ? "filterbar active" : "filterbar"} onClick={setActive}

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

    // const [active, setActive] = useState([]);
    // document.querySelectorAll('.nav-link').forEach(link => {
    //     if(link.item === window.location.item){
    //         link.setAttribute('aria-current', 'page')
    //     }
    // })

    //VANILLA JAVASCRIPT OPTION
    // var header = document.getElementById("filter-btn");
    // var btns = header.getElementsByClassName("nav-link");

    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //     });
    // }

    return (
    <div className="work-container">
        <section id="front-end">
            <h1 className="portfolio-heading">Portfolio</h1>
            <p className="info">with front-end</p>
            <div className="filterItem" id="filter-btn">
                    <ul className="nav-link">
                        <li><Button onClick={()=> setData(CardData)} active>All</Button></li>
                            {collection.map((item)=> 
                                <li><Button onClick={()=>{gallery_filter(item)}}>{item}</Button></li>)}
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

/* <motion.div className="filterItem"
key={CardData.id}
layout
initial={{ opacity: 0 }}
animate={{ opacity: 2 }}
exit={{ opacity: 0 }}
transition={{duration: 0.5}}
>
    <ul id="filter-btn">
        <li><button class="nav-link" onClick={()=> setData(CardData)}>All</button></li>
            {collection.map((item)=> <li><button class="nav-link" onClick={()=>{gallery_filter(item)}}>{item} </button> </li>)}
    </ul>
</motion.div> */

// return (
//     <div className="work-container">
//         <section id="front-end">
//             <h1 className="portfolio-heading">Portfolio</h1>
//             <p className="info">with front-end</p>
//             <div className="filterItem" id="filter-btn">
//                     <ul>
//                         <li><button className="nav-link" onClick={()=> setData(CardData)}>All</button></li>
//                             {collection.map((item)=> <li><button className="nav-link" onClick={()=>{gallery_filter(item)}}>{item} </button> </li>)}
//                     </ul>
//             </div>

//             <div className="frontend-container">
                
//                 {data.map((val, ind) => {
//                     return (
//                         <Work
//                             key={ind}
//                             imgsrc={val.imgsrc}
//                             title={val.title}
//                             description={val.description}
//                             liveURL={val.liveURL}
//                             github={val.github}
//                             tag={val.tag}
//                         />
//                     );
//                 })}
                
//             </div>
//         </section>
//     </div>
//     )
// }

// export default Card;
