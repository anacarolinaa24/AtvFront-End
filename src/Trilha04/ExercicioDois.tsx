import React, { useState } from "react";
import "./ExercicioDois.css";

interface NovoUsuario {
  name: string;
  email: string;
}

const ExercicioDois: React.FC = () => {
  const [usuario, setUsuario] = useState<NovoUsuario>({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<{
    tipo: "sucesso" | "erro" | null;
    mensagem: string;
  }>({ tipo: null, mensagem: "" });
  const [carregando, setCarregando] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cadastrarUsuario = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario.name.trim() || !usuario.email.trim()) {
      setStatus({
        tipo: "erro",
        mensagem: "Por favor, preencha todos os campos",
      });
      return;
    }

    setCarregando(true);
    setStatus({ tipo: null, mensagem: "" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();

      setStatus({
        tipo: "sucesso",
        mensagem: `Usuário ${data.name} cadastrado com sucesso!`,
      });
      setUsuario({ name: "", email: "" });
    } catch (error) {
      setStatus({
        tipo: "erro",
        mensagem: "Erro ao cadastrar usuário. Tente novamente.",
      });
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Novo Usuário</h2>

      <form onSubmit={cadastrarUsuario} className="formulario">
        <div className="campo">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={usuario.name}
            onChange={handleInputChange}
            placeholder="Digite o nome"
          />
        </div>

        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleInputChange}
            placeholder="Digite o email"
          />
        </div>

        <button type="submit" disabled={carregando} className="botao-cadastrar">
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>

      {status.mensagem && (
        <div className={`mensagem ${status.tipo}`}>{status.mensagem}</div>
      )}
    </div>
  );
};

export default ExercicioDois;
