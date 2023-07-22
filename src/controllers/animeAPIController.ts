import {Request,Response} from "express";
import {AnimeDatabase} from '../models/animeModel'
import {sequelize} from '../instances/pg_connection'
import { generatejwt,isAdmin } from "../config/passport";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";



export const getSome = async (req:Request,res:Response) => {
    const type = req.params.type
    try{
        let animes;
        if (type == 'random'){
            animes = await AnimeDatabase.findAll({
            order:sequelize.random(),
            limit:20})
        }
        else{
            animes = await AnimeDatabase.findAll({
            where:{
                tag_type:type
            },
            order:sequelize.random(),
            limit:20})

        }
        if (animes.length == 0){
            return res.status(200).json({message:{error:'No Content',status:204}, content: false})
        }
        res.status(200).json({message:'Successful', content: animes})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

export const getById = async (req:Request,res:Response) => {
    let id = req.params.id
    try{
        let anime = await AnimeDatabase.findOne({
            where:{
                id
            }
        })

        if (!anime){
            return res.status(200).json({message:{error:'No Content',status:204}, content: false})
        }
        res.status(200).json({message:'Successful', content: anime})
    }catch (err){
        res.status(200).json({message:'Error', content: []})

    }
}

export const getRandom = async (req:Request,res:Response) => {
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

export const getRandomMaid = async (req:Request,res:Response) => {
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

export const getRandomWaifu = async (req:Request,res:Response) => {
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

export const getRandomSmug = async (req:Request,res:Response) => {
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

export const getRandomGenshin = async (req:Request,res:Response) => {
    try{

        let conteudos = await AnimeDatabase.findOne({
        where: {
            tag_type:'genshin'
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

export const register = async (req: Request, res: Response) => {
    if(req.body.name && req.body.password) {
        let { name, password } = req.body;

        let hasUser = await User.findOne({where: { name }});
        if(!hasUser) {
            const passHashed = await bcrypt.hash(password,10);
            console.log(passHashed)
            let newUser = await User.create
            ({ 
                name,
                isAdmin:false,
                password:passHashed 
            });
            let UserToken = generatejwt({id:newUser.id,isAdmin:false});

            return res.status(201).json({ id: newUser.id,UserToken });
        } else {
            return res.json({ error: 'Invalid password' });
        }
    }

    res.json({ message:'Name and password not received' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.name && req.body.password) {
        let name: string = req.body.name;
        let password: string = req.body.password;
        try {
            let user = await User.findOne({ 
                where: { name}
            });
            const passHashed = await bcrypt.compare(password,user?.password as string)
            if(user && passHashed){
                let UserToken = generatejwt({id:user.id, isAdmin:user.isAdmin});
                return res.json({token: UserToken});
            }
            else {
                return res.json({ error: 'User does not exist' });
            }

        } catch (error) {
            console.log(error)
            return res.json({ message:'Server error' });
        }

    }

    return res.json({ message:'Name and password not received' });
}

export const putAnime = async (req:Request, res:Response) => {

    const {tag_type,source,url,description,secret_key} = req.body

    if (req.headers.authorization && !isAdmin(req.headers.authorization)) {
        return res.status(403).json({ message: 'Not an admin' });
    }

    if (secret_key !== process.env.JWT_SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})
    
    try {
        const put = await AnimeDatabase.create({
        tag_type: tag_type,
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

export const deleteAnime = async (req:Request, res:Response) => {
    const {id,secret_key} = req.body
    
    if (req.headers.authorization && !isAdmin(req.headers.authorization)) {
        return res.status(403).json({ message: 'Not an admin' });
    }


    if (secret_key !== process.env.JWT_SECRET_KEY) return res.status(403).json({message:'Wrong SecretKey'})
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
