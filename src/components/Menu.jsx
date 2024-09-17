import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="menu">
      <a href="./flyer.pdf" target="_blank" rel="noopener noreferrer">
        Programme
      </a>
      <Link to="/ressource">Ressources Techniques</Link>
    </aside>
  );
};

export default Menu;
