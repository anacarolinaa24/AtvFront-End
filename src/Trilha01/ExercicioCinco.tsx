import React from "react";
import "./ExercicioCinco.css";

const ExercicioCinco: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Minha Página</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default ExercicioCinco;
