import { Router,Request,Response } from "express";

const routers2 = Router()

routers2.get('/',(req:Request,res:Response) =>{
    res.send('adminnnnnnnnn oooooooooooooooo')
})
routers2.get('/v2',(req:Request,res:Response) =>{
    res.send('adminnnasdasdsadoooooooooo')
})

export default routers2;