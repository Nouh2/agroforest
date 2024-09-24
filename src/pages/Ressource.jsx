import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

function Ressource() {
  const resources = [
     {
      title: "Fiches de cadrage des ateliers",
      subsections: [
        {
          items: [
            { name: "Olivier", link: "./1. Olivier.docx", thumbnail: "./atel.jpeg" },
            { name: "Arganier", link: "./2. Arganier.docx", thumbnail: "./atel.jpeg" },
            { name: "Caroubier", link: "./3. Caroubier.docx", thumbnail: "./atel.jpeg" },
            { name: "Atriplex et Cactus", link: "./4. Atriplex et Cactus.docx", thumbnail: "./atel.jpeg" },
            { name: "Amandier et Pistachier", link: "./5. Amandier et Pistachier.docx", thumbnail: "./atel.jpeg" },
          ],
        },
      ],
    },
    {
      title: "Fiches Pédagogiques",
      subsections: [
        {
          title: "Fiches arbres",
          items: [
            { name: "Fiche Amandier", link: "./Fiche Amandier.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Arganier", link: "./Fiche Arganier.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Atriplex", link: "./Fiche Atriplex.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Câpéprier", link: "./Fiche Câpéprier.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Caroubier", link: "./Fiche Caroubier.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Figuier de barbarie", link: "./Fiche Figuier de barbarie.pdf", thumbnail: "./ped.jpeg" },
            { name: "Fiche Pistachier", link: "./Fiche Pistachier.pdf", thumbnail: "./ped.jpeg" },
          ],
        },
        {
          title: "Fiches couverts végetaux",
          items: [
            { name: "Fiche Legumineuses", link: "./Fiche Legumineuses.pdf", thumbnail: "./couv.jpg" },
            { name: "Fiche Moutarde d'abyssinie", link: "./Fiche Moutarde d'abyssinie.pdf", thumbnail: "./couv.jpg" },
            { name: "Fiche Sorgho du Soudan", link: "./Fiche Sorgho du Soudan.pdf", thumbnail: "./couv.jpg" },
          ],
        },
        {
          title: "Fiches cultures",
          items: [
            { name: "Fiche Orge", link: "./Fiche Orge.pdf", thumbnail: "./cult.jpg" },
            { name: "Fiche Quinoa", link: "./Fiche Quinoa.pdf", thumbnail: "./cult.jpg" },
            { name: "Fiche Triticale", link: "./Fiche Triticale.pdf", thumbnail: "./cult.jpg" },
            { name: "Fiche cultures intercalaires", link: "./Fiche technique optimisation des cultures annuelles dans les oliveraies en pente.pdf", thumbnail: "./cult.jpg" },
          ],
        },
      ],
    },
    {
      title: "Articles de Recherches",
      items: [
        { name: "Agroforestry in Morocco Sais case", link: "./AgroforestryinMoroccoSaiscase.pdf", thumbnail: "./diplome.png" },
        { name: "Argan oil foot_print Bayssi et al 2024", link: "./Argan oil foot_print Bayssi et al 2024.pdf", thumbnail: "./diplome.png" },
        { name: "Bekkaoui et al resilience AFRIMED 2024", link: "./Bekkaoui et al resilience AFRIMED 2024.pdf", thumbnail: "./diplome.png" },
        { name: "Carbone de _sols en Afrique", link: "./Carbone_des_sols_en_Afrique.pdf", thumbnail: "./diplome.png" },
        { name: "El Koudrim et al agroforestery AFRIMED 2024", link: "./El Koudrim et al agroforestery AFRIMED 2024.pdf", thumbnail: "./diplome.png" },
        { name: "Recueil des résumés Séminaire Agroforesterie", link: "./Recueil-des-résumés-Séminaire-Agroforesterie_13-juil-2023.pdf", thumbnail: "./diplome.png" },
        { name: "Bekkaoui Congres Intern Arganier final", link: "./Bekkaoui Congres Intern Arganier final- 11.pptx", thumbnail: "./diplome.png" },
        { name: "Optimal distance between olive trees", link: "./Optimal distance between olive trees and annual crops in rainfed.pdf", thumbnail: "./diplome.png" },
        { name: "Pomegranate–Quinoa-Based Agroforestry System", link: "./Pomegranate–Quinoa-Based Agroforestry System.pdf", thumbnail: "./diplome.png" },
        { name: "Quinoa–Olive Agroforestry System Assessment in Semi-Arid", link: "./Quinoa–Olive Agroforestry System Assessment in Semi-Arid.pdf", thumbnail: "./diplome.png" },
        { name: "Soil Properties at Different Distances", link: "./Soil Properties at Different Distances.pdf", thumbnail: "./diplome.png" },
        { name: "Productivité et efficience des systèmes agroforestiers", link: "./Productivité et efficience des systèmes agroforestiers.pdf", thumbnail: "./diplome.png" },
        { name: "Yield and related traits of three legume crops grown in olive-based", link: "./Yield and related traits of three legume crops grown in olive-based.pdf", thumbnail: "./diplome.png" },
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

export default Ressource;

