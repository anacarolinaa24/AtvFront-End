import React from "react";
import ExercicioDois from "./Trilha01/ExercicioDois";
import ExercicioUm from "./Trilha01/ExercicioUm";

const App: React.FC = () => {
  return (
    <div>
      <ExercicioDois
        name="João Silva"
        description="Desenvolvedor Frontend"
        imageUrl="https://via.placeholder.com/150"
      />

      <ExercicioUm
        label="Clique aqui"
        onClick={() => alert("Botão clicado!")}
      />
    </div>
  );
};

export default App;
