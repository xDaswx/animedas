import express, { NextFunction, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import routers from './routes/rotas'
import Joi from 'joi';

const app = express();

app.use(bodyParser.json());

// Middleware para capturar erros de análise de JSON
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError) {
        res.status(400).json({ message: 'JSON inválido' });
    } 
    else {
        res.status(500).json({ message: 'Erro interno no servidor' });
      }
  next();
});

app.use(routers)

// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));