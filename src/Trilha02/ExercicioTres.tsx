import React, { useState } from "react";
import "./ExercicioTres.css";

interface Tarefa {
  id: number;
  texto: string;
}

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[];
}

const ExercicioTres: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      const novaTarefaObj: Tarefa = {
        id: Date.now(),
        texto: novaTarefa,
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setNovaTarefa("");
    }
  };

  return (
    <div className="lista-tarefas-container">
      <h2>Lista de Tarefas</h2>

      <form onSubmit={adicionarTarefa} className="tarefa-form">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
          className="tarefa-input"
        />
        <button type="submit" className="tarefa-button">
          Adicionar
        </button>
      </form>

      <ul className="tarefa-lista">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="tarefa-item">
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExercicioTres;
