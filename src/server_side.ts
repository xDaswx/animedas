import express, { NextFunction, Request, Response } from 'express';
import APIrouters from './routes/rotas'
import cors from 'cors'
require('dotenv').config()

const app = express();
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