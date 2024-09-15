import React from "react";

function Content() {
  return (
    <div className="content">
      <h1>Journée de l'agroforesterie</h1>
      <h2>26 Septembre 2024</h2>
      <h2>Co-construire une feuille de route à l'échelle nationale</h2>
      <p>
        En réponse à la crise climatique et aux enjeux de souveraineté alimentaire, cette journée organisée sous le patronage du Ministère de l'Agriculture, de la Pêche Maritime, du Développement Rural et des Eaux et Forêts, vise à construire via des ateliers participatifs une feuille de route ambitieuse pour le déploiement de systèmes agroforestiers à l'échelle nationale.
      </p>
      <p>Cette journée s'inscrit dans une démarche:</p>
      <ol>
        <li>De co-construction inclusive avec l'ensemble des parties prenantes de l'écosystème agricole marocain.</li>
        <li>Systémique capitalisant sur tous les leviers de l'agroécologie avec un focus fort sur l'optimisation du cycle de l'eau.</li>
        <li>Fondée sur la science et capitalisant sur le savoir-faire local, l'expertise de terrain ainsi que l'innovation technologique (Data, IA, Digital).</li>
      </ol>
      <div className="quote">
        <p>
            En réunissant les principaux décideurs de la chaine de valeur agricole, cette première édition vise à permettre à chacun d'enrichir la feuille de route pour une agriculture marocaine résiliente, durable et souveraine.
        </p>
      </div>
      <img src="./footer.png" alt="footer" />
    </div>
  );
}

export default Content;
