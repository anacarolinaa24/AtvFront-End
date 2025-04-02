"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Exercicio.css");
const Button = () => {
    const handleClick = () => {
        alert("Botão clicado!");
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "Button", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleClick, children: "Login" }) }));
};
exports.default = Button;
