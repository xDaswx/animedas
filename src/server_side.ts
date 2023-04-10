import exprees, {Request, Response} from 'express';
import routers from './routes/rotas'
import routers2 from './routes/rotas2'

const server = exprees();

server.use('/',routers);
server.use('/admin',routers2);
server.listen(80);
console.log('Servidor iniciado!')