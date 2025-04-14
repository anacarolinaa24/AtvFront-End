"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ExercicioDois.css");
const ExercicioDois = ({ nomeInicial }) => {
    const [nome, setNome] = (0, react_1.useState)(nomeInicial);
    const [novoNome, setNovoNome] = (0, react_1.useState)("");
    const atualizarNome = (e) => {
        e.preventDefault();
        if (novoNome.trim()) {
            setNome(novoNome);
            setNovoNome("");
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "saudacao-container", children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Ol\u00E1, ", nome, "!"] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: atualizarNome, className: "saudacao-form", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: novoNome, onChange: (e) => setNovoNome(e.target.value), placeholder: "Digite um novo nome", className: "saudacao-input" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "saudacao-button", children: "Atualizar Nome" })] })] }));
};
exports.default = ExercicioDois;
