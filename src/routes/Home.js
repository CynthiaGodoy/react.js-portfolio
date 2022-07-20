import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Card2 from "../components/Card2";
import Card from "../components/Card";
import Form from "../components/Form"

import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutMe />
            <Card2 />
            <Card />
            <Skills />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;
