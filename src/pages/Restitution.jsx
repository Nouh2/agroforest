import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const restitutions = [
    {
      title: "Synthèse globale",
      subsections: [
        {
          items: [
            { name: "Restitution Journée Agroforesterie", link: "./Restitution Journée Agroforesterie du 26092024.pdf", thumbnail: "./background.jpg" },
          ],
        },
      ],
    },
    
    {
      title: "Comptes-rendus détaillés",
      subsections: [
        {
          items: [
            { name: "Atelier Olivier", link: "/Compte/Compte rendu atelier olivier .pdf", thumbnail: "./diplome.png" },
            { name: "Atelier Arganier", link: "/Compte/Compte-rendu atelier Arganier.pdf", thumbnail: "./diplome.png" },
            { name: "Atelier Atriplex et Cactus", link: "/Compte/Compte-rendu atelier Atriplex Cactus.pdf", thumbnail: "./diplome.png" },
            { name: "Atelier Caroubier", link: "/Compte/Compte-rendu atelier caroubier .pdf", thumbnail: "./diplome.png" },
            { name: "Atelier transversal", link: "/Compte/Compte-rendu atelier transversal.pdf", thumbnail: "./diplome.png" },
            { name: "Atelier Amandier et Pistachier", link: "/Compte/Compte-rendu atelier Pistachier_Amandier.pdf", thumbnail: "./diplome.png" },
          ],
        },
      ],
    },
];


function Restitution() {
    return (
        <div>
      <Header />
      <div className="main-content-ressource">
        <div className="nav">
          <h1>Restitution</h1>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
        {restitutions.map((block, index) => (
          <div key={index} className="resource-block">
            <h2>{block.title}</h2>
            {block.subsections ? (
              block.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="subsection">
                  <h3>{subsection.title}</h3>
                  <div className="thumbnails">
                    {subsection.items.map((item, idx) => (
                      <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="thumbnail">
                          <img src={item.thumbnail} alt={item.name} />
                          <p>{item.name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="thumbnails">
                {block.items.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="thumbnail">
                      <img src={item.thumbnail} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    );
}

export default Restitution;