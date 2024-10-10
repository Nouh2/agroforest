import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="menu">
      <a href="./flyer.pdf" target="_blank" rel="noopener noreferrer">
        Programme
      </a>
      <Link to="/ressource">Ressources Techniques</Link>
      <Link to="/restitution">Restitution</Link>
      <Link to="/medialibrary">Media Library</Link>
      <a href="https://www.upyaconnect.org/fr" target="_blank" rel="noopener noreferrer">
        Hub de connaissances
      </a>
    </aside>
  );
};

export default Menu;
