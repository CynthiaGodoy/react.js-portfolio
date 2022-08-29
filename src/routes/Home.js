import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Card2 from "../components/Card2";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Card />
            <Card2 />
            <Footer />
        </div>
    );
};

export default Home;
