import "./HeroStyles.css";

import React from 'react';

import BackgroundImg from "../assets/desk.jpg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="hero" id="home">
        <div className="background bgBox">
            <img className="desk-img bgExample" src={ BackgroundImg } alt="desk"/>
        </div>

        <div className="overlay">
            <Fade bottom opposite>
              <p>hi, my name is cynthia</p>
              <h1>i am a developer</h1>
                <div classname="buttons">
                  <Link to="#portfolio-frontend" className="btn hvr-rectangle-out" smooth>Portfolio</Link>
                  <Link to="#about" className="btn-light" smooth>About</Link>
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default Hero;