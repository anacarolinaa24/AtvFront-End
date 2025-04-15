import React, { useState } from "react";
import "./ExercicioUm.css";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const ExercicioUm: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(false);

  const buscarUsuario = async () => {
    if (!userId.trim()) {
      setErro("Por favor, digite um ID");
      return;
    }

    setCarregando(true);
    setErro("");
    setUsuario(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      setErro("Erro ao buscar usuário. Verifique o ID e tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="busca-usuario">
      <h2>Buscar Usuário</h2>

      <div className="form-grupo">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Digite o ID do usuário"
          className="input-busca"
        />
        <button
          onClick={buscarUsuario}
          disabled={carregando}
          className="botao-buscar"
        >
          {carregando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {erro && <div className="erro">{erro}</div>}

      {usuario && (
        <div className="card-usuario">
          <h3>Dados do Usuário</h3>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExercicioUm;
