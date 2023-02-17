//PARENT FILE OF OUR APP
import React from "react";
import "./index.css";

//LINK ALL ROUTES
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Card2 from "./components/Card2";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App () {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Card />
      <Card2 />
      <Form />
      <Footer />
    </>
  );
}

export default App;
