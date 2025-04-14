import React, { useState } from "react";
import "./ExercicioQuatro.css";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ExercicioQuatro: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="toggle-container">
      <button onClick={alternarVisibilidade} className="toggle-button">
        {visivel ? "Ocultar" : "Mostrar"}
      </button>

      {visivel && <div className="toggle-content">{texto}</div>}
    </div>
  );
};

export default ExercicioQuatro;
