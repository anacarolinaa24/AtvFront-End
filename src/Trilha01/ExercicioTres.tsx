import React from "react";
import "./ExercicioTres.css"; // Importa o CSS externo

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ExercicioTres: React.FC<CardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="image" />
      <div>
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ExercicioTres;
