import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

function Ressource() {
  const resources = [
    {
      title: "Systèmes Agroforestiers - Fiches Techniques",
      items: [
        { name: "Document 1", link: "/path/to/document1.pdf", thumbnail: "/path/to/thumbnail1.png" },
        { name: "Document 2", link: "/path/to/document2.pdf", thumbnail: "/path/to/thumbnail2.png" },
        { name: "Document 3", link: "/path/to/document3.pdf", thumbnail: "/path/to/thumbnail3.png" },
        { name: "Document 4", link: "/path/to/document4.pdf", thumbnail: "/path/to/thumbnail4.png" },
        { name: "Document 5", link: "/path/to/document5.pdf", thumbnail: "/path/to/thumbnail5.png" },
        { name: "Document 6", link: "/path/to/document6.pdf", thumbnail: "/path/to/thumbnail6.png" },
        { name: "Document 7", link: "/path/to/document7.pdf", thumbnail: "/path/to/thumbnail7.png" },
        { name: "Document 8", link: "/path/to/document8.pdf", thumbnail: "/path/to/thumbnail8.png" },
        { name: "Document 9", link: "/path/to/document9.pdf", thumbnail: "/path/to/thumbnail9.png" },
        { name: "Document 10", link: "/path/to/document10.pdf", thumbnail: "/path/to/thumbnail10.png" },
        { name: "Document 11", link: "/path/to/document11.pdf", thumbnail: "/path/to/thumbnail11.png" },
        { name: "Document 12", link: "/path/to/thumbnail12.png", thumbnail: "/path/to/thumbnail12.png" },
      ],
    },
    {
      title: "Articles de Recherches",
      items: [
        { name: "Agroforestry in Morocco Sais case", link: "./AgroforestryinMoroccoSaiscase.pdf", thumbnail: "./background.jpg" },
        { name: "Argan oil foot_print Bayssi et al 2024", link: "./Argan oil foot_print Bayssi et al 2024.pdf", thumbnail: "./background.jpg" },
        { name: "Bekkaoui et al resilience AFRIMED 2024", link: "./Bekkaoui et al resilience AFRIMED 2024.pdf", thumbnail: "./background.jpg" },
        { name: "Carbone de _sols en Afrique", link: "./Carbone_des_sols_en_Afrique.pdf", thumbnail: "./background.jpg" },
        { name: "El Koudrim et al agroforestery AFRIMED 2024", link: "./El Koudrim et al agroforestery AFRIMED 2024.pdf", thumbnail: "./background.jpg" },
        { name: "Gestion durable de leau et des sols au Maroc", link: "", thumbnail: "./background.jpg" },
        { name: "Recueil des résumés Séminaire Agroforesterie", link: "./Recueil-des-résumés-Séminaire-Agroforesterie_13-juil-2023.pdf", thumbnail: "./background.jpg" },
        { name: "Bekkaoui Congres Intern Arganier final", link: "./Bekkaoui Congres Intern Arganier final- 11.pptx", thumbnail: "./background.jpg" },
      ],
    },
    {
      title: "Hub de Connaissances",
      items: [
        { name: "Upya-Connect", link: "https://www.upyaconnect.org/fr", thumbnail: "./connect_logo.png" },
      ],
    },
  ];

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
        {resources.map((block, index) => (
          <div key={index} className="resource-block">
            <h2>{block.title}</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ressource;

