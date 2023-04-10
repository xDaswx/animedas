import { Router, Request, Response} from 'express';

const router =  Router()

router.get('/ata', (req:Request,res:Response)=>{
    res.send('aaaaaa');
})

router.get('/',(req:Request,res:Response)=>{
    //rota estaticas
    res.send('<h1>aaaaaaaaaaaaa</h1>')
})

router.get('/natzaum/:slug',(req:Request,res:Response)=>{
    //rota dinamica
    const param = req.params.slug
    res.send(`param: ${param}`)
})

router.get('/natzaumv2/:vai-:onde',(req:Request,res:Response)=>{
    //rota dinamica
    const {vai,onde} = req.params
    res.send(`param: ${vai.toUpperCase()} ${onde.toUpperCase()}`)
})



export default router;