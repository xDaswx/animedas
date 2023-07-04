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

    const phrases = [
            'Expand Your Anime Image Library with an Additional API Integration',
            'Discover a Second API Source for Anime Icons on Our Website',
            'Level up Your Anime Image Repository with a Second API Connection',
            'Access a Diverse Selection of Anime Icons with Another API Integration']

    const random = Math.floor(Math.random() * phrases.length)
    res.render('home',{
        home:{title:phrases[random],img:'noone'}
    })
})

app.get('/gallery', (req:Request, res:Response)=> {
    res.render('gallery')
})

app.use((req,res)=>{
    res.redirect('/home')
})


// Iniciar servidor
const port = 80;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));