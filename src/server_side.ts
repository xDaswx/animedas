import express, { ErrorRequestHandler, Request, Response } from 'express';
import APIrouters from './routes/rotas'
import cors from 'cors'
import passport from 'passport';
require('dotenv').config()

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.use(express.static('public'))
app.use(passport.initialize());


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status);
    } else {
        res.status(400);
    }
    if(err.message) {
        res.json({ error: err.message });
    } else {
        res.json({ error: 'Ocorreu algum erro.' });
    }
}



app.use('/api/v1',APIrouters)

//Middleware se a path não for encontrada
app.use('/api/v1', (req:Request, res:Response) => {
    res.status(404).json({ message: {error: 'Path not found',status:404}});
});

app.use((req:Request, res:Response)=>{
    res.status(404).json({message:'Not Found', status:404})
})

app.use(errorHandler);

// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));