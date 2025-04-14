"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ExercicioQuatro.css");
const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/160",
    "https://via.placeholder.com/170",
    "https://via.placeholder.com/180",
    "https://via.placeholder.com/190",
    "https://via.placeholder.com/200",
];
const ExercicioQuatro = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "gallery", children: images.map((src, index) => ((0, jsx_runtime_1.jsx)("img", { src: src, alt: `Imagem ${index + 1}`, className: "gallery-item" }, index))) }));
};
exports.default = ExercicioQuatro;
