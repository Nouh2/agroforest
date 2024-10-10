import React, { useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


 // Liste des images dans un tableau
    const images = [
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.05 (1).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.05 (3).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.05 (6).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.05.jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (1).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (2).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (3).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (4).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (6).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06 (8).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.06.jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.07 (1).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.07 (4).jpeg',
    //'/Gallery/WhatsApp Image 2024-09-26 at 17.37.07 (7).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.07 (8).jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.08.jpeg',
    '/Gallery/WhatsApp Image 2024-09-26 at 17.37.09.jpeg',
    // Ajoutez les chemins d'autres images ici
    ];

function MediaLibrary() {
   
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour agrandir l'image au clic
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Fonction pour fermer l'image en grand
    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div>
        <Header />
        <div className="main-content-ressource">
            <div className="nav">
            <h1>Media Library</h1>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            </div>
        </div>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image}
                alt={`Media ${index + 1}`}
                className="gallery-image"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeImage}>
            <img src={selectedImage} alt="Selected" className="lightbox-image" />
          </div>
        )}
      </div>
    );
}

export default MediaLibrary;