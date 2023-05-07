import {Request,Response, NextFunction} from 'express';

const fieldvalidator = (req:Request, res:Response ,next:NextFunction) =>{
    if (!req.body.title) {
        return res.status(400).send({message:'Não valido'})
    }
    next()
}


export default fieldvalidator;