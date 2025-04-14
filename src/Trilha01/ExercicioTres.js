"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ExercicioTres.css"); // Importa o CSS externo
const ExercicioTres = ({ name, description, imageUrl, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsx)("img", { src: imageUrl, alt: name, className: "image" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "name", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: description })] })] }));
};
exports.default = ExercicioTres;
