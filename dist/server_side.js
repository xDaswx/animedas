"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import * as bodyParser from 'body-parser';
const rotas_1 = __importDefault(require("./routes/rotas"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.json());
app.use(express_1.default.static('./public'));
// Middleware para capturar erros de análise de JSON em POST requests
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: 'JSON inválido' });
    }
    else {
        return res.status(500).json({ message: 'SERVER_ERROR' });
    }
    next();
});
app.use('/api/v1', rotas_1.default);
app.use((req, res) => {
    res.redirect('https://animedas-production.up.railway.app/');
});
// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
