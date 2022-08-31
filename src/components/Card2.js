// BACKEND PORTFOLIO CAROUSEL-------------
import "./WorkStyles.css";
import Work2 from "./Work2";
import CardData from "./CardData2";

import React from 'react';
import Slider from "react-slick";
import { useState } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//FULL PORTFOLIO PAGE---------------------
const Card2 = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [ImageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        
        mobileFirst: true,
        responsive: [{
            breakpoint: 740,
            settings: {
            slidesToShow: 1,
            }}]
    };

    return (
    <div className="work-container" id="portfolio-backend">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="info">Back-End & CLI's</p>
        <div className="portfolio-container"> 
            <Slider {...settings}>
                {CardData.map((val, ind) => {
                    return (
                        <div className={ind === ImageIndex ? "slide activeSlide" : "slide"}>
                            <Work2
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                description={val.description}
                                github={val.github}
                        />
                        </div>
                    );
                })}
            </Slider>
        </div>
    </div>
    );
}

export default Card2;

// import "./WorkStyles.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import Work2 from "./Work2";
// import CardData from "./CardData2";

// import React from 'react';
// import Slider from "react-slick";

// function Card2() {
//       const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 3,
//         speed: 500
//       };
//       return (

//         <div className="work-container" id="portfolio-backend">
//             <h1 className="portfolio-heading">Portfolio</h1>
//                 <p className="info">Back-End Only</p><div>
//                 <Slider {...settings}>
                    
//                     <div className="portfolio-container">
//                         {CardData.map((val, ind) => {
//                             return (
//                                 <Work2
//                                     key={ind}
//                                     imgsrc={val.imgsrc}
//                                     title={val.title}
//                                     description={val.description}
//                                     github={val.github}
//                                 />
//                             );
//                         })}
                    
//                     </div>
//                     </Slider></div>
//         </div>
//     )
// }

// export default Card2;
// 

// import "./WorkStyles.css";
// import Work2 from "./Work2";
// import CardData from "./CardData2";
// import { useRef, useEffect, useState } from "react";

// import React from 'react';
// import { motion } from 'framer-motion';

// function Card2() {
//     const [width, setWidth] = useState(0);
//     const carousel = useRef();

//     useEffect(() => {
//         console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
//     },[]);

//CREATES A CARD FRAME
// const Card2 = () => {
//     return (
//         <div className="work-container" id="portfolio-backend">
//             <h1 className="portfolio-heading">Portfolio</h1>
//             <p className="info">Back-End Only</p>

//                 <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
//                     <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                        
//                         <div className="portfolio-container">
//                         {CardData.map((val, ind) => {
//                             return (
//                                 <motion.div className="item">
//                                 <Work2
//                                     key={ind}
//                                     imgsrc={val.imgsrc}
//                                     title={val.title}
//                                     description={val.description}
//                                     github={val.github}
//                                 />
//                                 </motion.div>
//                             );
//                         })}
//                         </div>
//                     </motion.div>
//                 </motion.div>
//         </div>
//     )
// }

// export default Card2
