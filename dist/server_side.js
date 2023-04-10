"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotas_1 = __importDefault(require("./routes/rotas"));
const rotas2_1 = __importDefault(require("./routes/rotas2"));
const server = (0, express_1.default)();
server.use('/', rotas_1.default);
server.use('/admin', rotas2_1.default);
server.listen(80);
console.log('Servidor iniciado!');
