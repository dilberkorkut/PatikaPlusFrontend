import { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Touch from "./pages/Touch";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/touch" element={<Touch />} />
        <Route path="/team/:id" element={<Team />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
