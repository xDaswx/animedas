"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const rotas_1 = __importDefault(require("./routes/rotas"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(bodyParser.json());
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
app.get('/teste', (req, res) => {
    res.status(200).send('Tudo ok!');
});
// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
