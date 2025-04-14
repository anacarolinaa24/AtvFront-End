import React, { useState } from "react";
import "./ExercicioUm.css";

interface ContadorProps {
  valorInicial: number;
}

const ExercicioUm: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador-container">
      <h2>Contador</h2>
      <div className="contador-valor">{contador}</div>
      <div className="contador-botoes">
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
};

export default ExercicioUm;
