import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import mustacheExpress from 'mustache-express';
import routers from './routes/rotas'
import cors from 'cors'
require('dotenv').config()

const app = express();
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname,'views'))
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

app.use('/api/v1',routers)
app.get('/home', (req:Request, res:Response)=> {
    res.render('teste',{
        name:[{idade:12},{idade:19}]
    })
})

app.use((req,res)=>{
    res.redirect('https://animedas-production.up.railway.app/')
})


// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));