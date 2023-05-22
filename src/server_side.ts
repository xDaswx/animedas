import express, { NextFunction, Request, Response } from 'express';
// import * as bodyParser from 'body-parser';
import routers from './routes/rotas'
// import cors from 'cors'
// require('dotenv').config()

const app = express();
// app.use(cors({
//     origin: '*'
// }))
// app.use(bodyParser.json());

app.use(express.static('./public'))

// // Middleware para capturar erros de análise de JSON em POST requests
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof SyntaxError) {
//         return res.status(400).json({ message: 'JSON inválido' });
//     } 
//     else {
//         return res.status(500).json({ message: 'SERVER_ERROR' });
//       }
//   next();
// });

app.use('/api/v1',routers)

app.get('/teste', (req,res)=>{
    res.status(200).send('Tudo ok!')
})


// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));