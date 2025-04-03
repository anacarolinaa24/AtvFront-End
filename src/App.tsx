import React from "react";
import Button from "./Trilha01/ExercicioUm";
import ProfileCard from "./Trilha01/ExercicioDois";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <h1>Meu Botão Estilizado</h1>
      <Button label="Clique Aqui" onClick={handleClick} />
      <div>
        <ProfileCard
          name="Ana Silva"
          description="Desenvolvedora Front-End apaixonada por UI/UX"
          imageUrl="https://via.placeholder.com/100"
        />
      </div>
    </div>
  );
};

export default App;
