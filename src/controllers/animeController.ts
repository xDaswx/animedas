import {Request,Response} from "express";
import {AnimeDatabase} from '../models/animeModel'
import {sequelize} from '../instances/pg_connection'


const getAnimes_random = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findAll({
        order: sequelize.random(),
        limit:1
        })
        
        res.status(200).json({message:'Successful', content: conteudos})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }

    
}

const putAnime = async (req:Request, res:Response) => {

    const {tag_type,width,height,source,url,description,secret_key} = req.body

    if (secret_key !== process.env.SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})
    
    try {
        const put = await AnimeDatabase.create({
        tag_type: tag_type,
        width: parseInt(width),
        height: parseInt(height),
        source: source,
        url: url,
        description: description,
    })
        return res.status(201).json({message:'OK', response: put})
    }
    catch(error){
        console.log('Requisição erro:', error)
        return res.status(401).json({message:'Error'})
    }
}

const deleteAnime = async (req:Request, res:Response) => {
    const {id,secret_key} = req.body

    if (secret_key !== process.env.SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})
    try{
        let AnimeDeleteById = await AnimeDatabase.destroy({
        where:{
            id: id
            }
        })
        return res.status(200).json({message:`ID ${1} deleted`,information: AnimeDeleteById})
    }
    catch(error) {
        console.log('delete/anime endpoint:' ,error)
        return res.status(400).json({message:'Error'})
    }

}


export {getAnimes_random,putAnime,deleteAnime};