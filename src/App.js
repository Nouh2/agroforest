import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ressource from "./pages/Ressource";
import Restitution from "./pages/Restitution";
import MediaLibrary from "./pages/MediaLibrary";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ressource" element={<Ressource />} />
          <Route path="/restitution" element={<Restitution />} />
          <Route path="/medialibrary" element={<MediaLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
