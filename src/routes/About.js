import React from 'react';

import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <Skills />
            <Footer />
        </div>
        );
    };

export default About;