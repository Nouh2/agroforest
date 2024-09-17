import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Content from "../components/Content";

function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default Home;
