import React from "react";
import "./Button.css"; // Importa o CSS externo

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ExercicioUm: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ExercicioUm;
