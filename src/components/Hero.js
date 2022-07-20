import "./HeroStyles.css";

import React from 'react'

import BackgroundImg from "../assets/desk.jpg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


const Hero = () => {
  return (
    <div className="hero" id="home">
        <div className="background">
            <img className="desk-img" src={ BackgroundImg } alt="desk"/>
        </div>
        <div className="overlay">
            <p>hi, my name is cynthia</p>
            <h1>i am motivated</h1>
            <Link to="#portfolio" className="btn">Portfolio</Link>
            <Link to="#about" className="btn-light">About</Link>
        </div>
    </div>
  )
}

export default Hero;