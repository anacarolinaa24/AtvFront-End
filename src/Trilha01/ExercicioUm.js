"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ExercicioUm.css");
const ExercicioUm = ({ label, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("button", { className: "styled-button", onClick: onClick, children: label }));
};
exports.default = ExercicioUm;
