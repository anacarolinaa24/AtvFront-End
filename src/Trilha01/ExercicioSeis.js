"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ExercicioSeis.css");
const ExercicioSeis = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (event) => {
        setFormData(Object.assign(Object.assign({}, formData), { [event.target.name]: event.target.value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Mensagem enviada por ${formData.name} (${formData.email}): ${formData.message}`);
    };
    return ((0, jsx_runtime_1.jsxs)("form", { className: "contact-form", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Entre em Contato" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", placeholder: "Nome", onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", placeholder: "Email", onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)("textarea", { name: "message", placeholder: "Sua mensagem", onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Enviar" })] }));
};
exports.default = ExercicioSeis;
