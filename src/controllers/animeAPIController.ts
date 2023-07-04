import {Request,Response} from "express";
import {AnimeDatabase} from '../models/animeModel'
import {sequelize} from '../instances/pg_connection'





const getSome = async (req:Request,res:Response) => {
    try{
        let animes = await AnimeDatabase.findAll({
        limit:20,
        })
        if (animes === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: null})
        }
        res.status(200).json({message:'Successful', content: animes})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

const getRandom = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findOne({
        order: sequelize.random(),
        limit:1
        })

        if (conteudos === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: conteudos})
        }
        res.status(200).json({message:'Successful', content: conteudos})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

const getRandomMaid = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findOne({
        where: {
            tag_type:'maid'
        },
        order: sequelize.random(),
        })

        if (conteudos === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: conteudos})
        }
        res.status(200).json({message:'Successful', content: conteudos})

    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

const getRandomWaifu = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findOne({
        where: {
            tag_type:'waifu'
        },
        order: sequelize.random(),
        })
        if (conteudos === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: conteudos})
        }
        
        res.status(200).json({message:'Successful', content: conteudos})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

const getRandomSmug = async (req:Request,res:Response) => {
    try{
        let conteudos = await AnimeDatabase.findOne({
        where: {
            tag_type:'smug'
        },
        order: sequelize.random(),
        })
        if (conteudos === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: conteudos})
        }
        
        res.status(200).json({message:'Successful', content: conteudos})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

const getRandomGenshin = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findOne({
        where: {
            tag_type:'genshin '
        },
        order: sequelize.random(),
        limit:1
        })
        if (conteudos === null){
            return res.status(200).json({message:{error:'No Content',status:204}, content: conteudos})
        }
        
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


export {getRandom,getRandomMaid,getRandomWaifu,getRandomSmug,getRandomGenshin,getSome,putAnime,deleteAnime};