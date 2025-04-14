"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ExercicioQuatro.css");
const ExercicioQuatro = ({ texto }) => {
    const [visivel, setVisivel] = (0, react_1.useState)(false);
    const alternarVisibilidade = () => {
        setVisivel(!visivel);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "toggle-container", children: [(0, jsx_runtime_1.jsx)("button", { onClick: alternarVisibilidade, className: "toggle-button", children: visivel ? "Ocultar" : "Mostrar" }), visivel && (0, jsx_runtime_1.jsx)("div", { className: "toggle-content", children: texto })] }));
};
exports.default = ExercicioQuatro;
