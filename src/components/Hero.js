import "./HeroStyles.css";
import ReactTypingEffect from 'react-typing-effect';

import React from 'react';

import BackgroundImg from "../assets/desk.jpg";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
      <div className="hero">
        <section id="home"> 
          <div className="background bgBox">
              <img className="desk-img bgExample" src={ BackgroundImg } alt="desk"/>
          </div>

          <div className="overlay">
            <Fade bottom opposite>
              <p>hi, my name is cynthia</p>
              <h1>i am a <ReactTypingEffect text={["developer", "UX designer", "UI designer"]}/><br/></h1>
                <div classname="buttons">
                  <Link to="front-end" className="btn hvr-rectangle-out" smooth>Portfolio</Link>
                  <Link to="about" className="btn-light" smooth>About</Link>
                </div>
            </Fade>
          </div>
        </section>
      </div>
  )
}

export default Hero;