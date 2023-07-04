import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import mustacheExpress from 'mustache-express';
import APIrouters from './routes/rotas'
import SITErouters from './routes/SITErotas'
import cors from 'cors'
require('dotenv').config()

const app = express();
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname,'/views'))
app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.use(express.static('public'))

// Middleware para capturar erros de análise de JSON em POST requests
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: 'JSON inválido'});
    } 
    else {
        return res.status(500).json({ message: 'SERVER_ERROR'});
      }
  next();
});

app.use('/api/v1',APIrouters)
app.use('/',SITErouters)

//Middleware se a path não for encontrada
app.use('/api/v1', (req:Request, res:Response) => {
    res.status(404).json({ message: {error: 'Path not found',status:404}});
});

app.use((req:Request, res:Response)=>{
    res.redirect('/home')
})

// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));