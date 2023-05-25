import {Request,Response} from "express";
import {AnimeDatabase} from '../models/animeModel'


const getAnimes_random = async (req:Request,res:Response) => {
    let conteudos = await AnimeDatabase.findAll()
    res.status(200).json({message:'testando', conteudo: conteudos})
}

const putAnime = async (req:Request, res:Response) => {

    const {tag_type,width,height,source,url,description,secret_key} = req.body
    if (req.body.secret_key !== process.env.SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})

    let put = await AnimeDatabase.create({
        tag_type: tag_type,
        width: parseInt(width),
        height: parseInt(height),
        source: source,
        url: url,
        description: description,
    })
    res.status(201).json({message:'OK', response: put})
}

const deleteAnime = async (req:Request, res:Response) => {
    const {id,secret_key} = req.body

    if (secret_key !== process.env.SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})

    let AnimeDeleteById = await AnimeDatabase.destroy({
        where:{
            id: id
        }
    })
    res.status(200).json({message:`ID ${1} deleted`,information: AnimeDeleteById})
}


export {getAnimes_random,putAnime,deleteAnime};