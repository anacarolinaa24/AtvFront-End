"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ExercicioTres.css");
const ExercicioTres = ({ tarefasIniciais }) => {
    const [tarefas, setTarefas] = (0, react_1.useState)(tarefasIniciais);
    const [novaTarefa, setNovaTarefa] = (0, react_1.useState)("");
    const adicionarTarefa = (e) => {
        e.preventDefault();
        if (novaTarefa.trim()) {
            const novaTarefaObj = {
                id: Date.now(),
                texto: novaTarefa,
            };
            setTarefas([...tarefas, novaTarefaObj]);
            setNovaTarefa("");
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lista-tarefas-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Lista de Tarefas" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: adicionarTarefa, className: "tarefa-form", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: novaTarefa, onChange: (e) => setNovaTarefa(e.target.value), placeholder: "Digite uma nova tarefa", className: "tarefa-input" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "tarefa-button", children: "Adicionar" })] }), (0, jsx_runtime_1.jsx)("ul", { className: "tarefa-lista", children: tarefas.map((tarefa) => ((0, jsx_runtime_1.jsx)("li", { className: "tarefa-item", children: tarefa.texto }, tarefa.id))) })] }));
};
exports.default = ExercicioTres;
