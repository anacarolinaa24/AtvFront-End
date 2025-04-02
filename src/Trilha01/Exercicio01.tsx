import React from "react";
import "./Exercicio.css";

const Button = () => {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div className="Button">
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Button;
