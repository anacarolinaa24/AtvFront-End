import React, { useState } from "react";
import "./ExercicioDois.css";

interface SaudacaoProps {
  nomeInicial: string;
}

const ExercicioDois: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState("");

  const atualizarNome = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoNome.trim()) {
      setNome(novoNome);
      setNovoNome("");
    }
  };

  return (
    <div className="saudacao-container">
      <h2>Olá, {nome}!</h2>
      <form onSubmit={atualizarNome} className="saudacao-form">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um novo nome"
          className="saudacao-input"
        />
        <button type="submit" className="saudacao-button">
          Atualizar Nome
        </button>
      </form>
    </div>
  );
};

export default ExercicioDois;
