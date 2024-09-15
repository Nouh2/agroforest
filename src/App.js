import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
