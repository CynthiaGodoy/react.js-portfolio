import "./WorkGridStyles.css";

import React from 'react';
import Fade from 'react-reveal/Fade';
import { motion } from "framer-motion";
import { CardData } from "./CardData";

const Work = (props) => {
    return ( 
        <motion.div className="combine"
                key={CardData.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                transition={{duration: 0.5}}
                >

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
        </motion.div>
    )
}

export default Work;
