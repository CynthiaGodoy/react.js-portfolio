//PARENT FILE OF OUR APP
import React from "react";
import "./index.css";

//LINK ALL ROUTES
import Home from "./routes/Home";
import Contact from "./routes/Contact";
// import React, { Component } from 'react';
import ScrollToTop from "./ScrollToTop";

import { Route, Routes } from "react-router-dom";

function App () {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <ScrollToTop />
    </>
  );
}

export default App;
