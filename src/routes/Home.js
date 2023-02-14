import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../routes/Home";
import Skills from "../components/Skills";
import Card2 from "../components/Card2";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
// 
import { Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/front-end" element={<Card />} />
                <Route path="/back-end" element={<Card2 />} />
                <Route path="/contact" element={<Form />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </div>
    );
};

export default Home;
