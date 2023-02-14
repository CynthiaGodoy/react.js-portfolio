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

    const [ImageIndex, setImageIndex] = useState(0);

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
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                }
            },
        ]
    };

    return (
    <div className="work-container">
        <section id="back-end">
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
        </section>
    </div>
    );
}

export default Card2;
