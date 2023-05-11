import {Request,Response, NextFunction} from 'express';

const fieldvalidator = (req:Request, res:Response ,next:NextFunction) =>{

    const {url,description,type} = req.body

    if (!url || !description || !type) {
        return res.status(400).send({message:'Requesição não foi aceita pois não foi informado as fields necessárias', missing: ["url","description","type"]})
    }
    next()
}

export default fieldvalidator;