import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const restitutions = [
    {
      title: "Compte-rendu",
      subsections: [
        {
          items: [
            { name: "Olivier", link: "/Compte/Compte rendu atelier olivier .pdf", thumbnail: "./atel.jpeg" },
            { name: "Arganier", link: "/Compte/Compte-rendu atelier Arganier.pdf", thumbnail: "./atel.jpeg" },
            { name: "Atriplex et Cactus", link: "/Compte/Compte-rendu atelier Atriplex Cactus.pdf", thumbnail: "./atel.jpeg" },
            { name: "Caroubier", link: "/Compte/Compte-rendu atelier caroubier .pdf", thumbnail: "./atel.jpeg" },
            { name: "Atelier transversal", link: "/Compte/Compte-rendu atelier transversal.pdf", thumbnail: "./atel.jpeg" },
            { name: "Amandier et Pistachier", link: "/Compte/Compte-rendu atelier Pistachier_Amandier.pdf", thumbnail: "./atel.jpeg" },
          ],
        },
      ],
    },

    {
      title: "Synthèse globale",
      subsections: [
        {
          items: [
            { name: "Olivier", link: "/Compte/Compte rendu atelier olivier .pdf", thumbnail: "./atel.jpeg" },
            { name: "Arganier", link: "/Compte/Compte-rendu atelier Arganier.pdf", thumbnail: "./atel.jpeg" },
            { name: "Atriplex et Cactus", link: "/Compte/Compte-rendu atelier Atriplex Cactus.pdf", thumbnail: "./atel.jpeg" },
            { name: "Caroubier", link: "/Compte/Compte-rendu atelier caroubier .pdf", thumbnail: "./atel.jpeg" },
            { name: "Atelier transversal", link: "/Compte/Compte-rendu atelier transversal.pdf", thumbnail: "./atel.jpeg" },
            { name: "Amandier et Pistachier", link: "/Compte/Compte-rendu atelier Pistachier_Amandier.pdf", thumbnail: "./atel.jpeg" },
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
          <h1>Ressources Techniques</h1>
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