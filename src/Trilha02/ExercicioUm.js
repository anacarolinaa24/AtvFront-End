"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ExercicioUm.css");
const ExercicioUm = ({ valorInicial }) => {
    const [contador, setContador] = (0, react_1.useState)(valorInicial);
    const incrementar = () => {
        setContador(contador + 1);
    };
    const decrementar = () => {
        setContador(contador - 1);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "contador-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Contador" }), (0, jsx_runtime_1.jsx)("div", { className: "contador-valor", children: contador }), (0, jsx_runtime_1.jsxs)("div", { className: "contador-botoes", children: [(0, jsx_runtime_1.jsx)("button", { onClick: decrementar, children: "-" }), (0, jsx_runtime_1.jsx)("button", { onClick: incrementar, children: "+" })] })] }));
};
exports.default = ExercicioUm;
