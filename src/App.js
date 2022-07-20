//PARENT FILE OF OUR APP
import React from "react";
import "./index.css";

//LINK ALL ROUTES
import Home from "./routes/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
