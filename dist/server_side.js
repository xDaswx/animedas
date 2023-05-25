"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const rotas_1 = __importDefault(require("./routes/rotas"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
app.engine('mustache', (0, mustache_express_1.default)());
app.set('view engine', 'mustache');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.static('public'));
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
app.get('/home', (req, res) => {
    res.render('teste', {
        name: [{ idade: 12 }, { idade: 19 }]
    });
});
app.use((req, res) => {
    res.redirect('https://animedas-production.up.railway.app/');
});
// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
