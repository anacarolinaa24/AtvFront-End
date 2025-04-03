import React from "react";
import "./ExercicioQuatro.css";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/170",
  "https://via.placeholder.com/180",
  "https://via.placeholder.com/190",
  "https://via.placeholder.com/200",
];

const ExercicioQuatro: React.FC = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagem ${index + 1}`}
          className="gallery-item"
        />
      ))}
    </div>
  );
};

export default ExercicioQuatro;
