import {Request,Response, NextFunction} from 'express';

const fieldvalidator = (req:Request, res:Response ,next:NextFunction) =>{

    const required = ['tag_type','width','height','source','url','description']
    for (const fields of required)
        if (!(fields in req.body)) {
            return res.status(400).send({message:'Fields missing', missing:fields})
        }
        next()
}

export default fieldvalidator;