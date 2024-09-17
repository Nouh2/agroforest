import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ressource from "./pages/Ressource";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ressource" element={<Ressource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
