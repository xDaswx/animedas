import {Request,Response} from "express";
import * as Models from '../models/animeModel'


const getAnimes_random = async (req:Request,res:Response) => {
    const response = {
        message:'OK',
        url:'http//cdn.localhost/testing.png',
        width: 1500,
        height:968,
        source:'test',
        tag_type: 'maid',
        description: await Models.getRandomAnime(),
        id:999
    }
    res.status(200).json(response)
}


const getAnimes_maid = (req:Request,res:Response) => {
    const response = {
        message:'OK',
        url:'http//cdn.localhost/testing.png',
        width: 1500,
        height:968,
        source:'test',
        tag_type: 'maid',
        description:'',
        id:999
    }
    res.status(200).json(response)
}

const getAnimes_waifu = (req:Request,res:Response) => {
    const response = {
        message:'OK',
        url:'http//cdn.localhost/testing.png',
        width: 1500,
        height: 968,
        source:'test',
        tag_type: 'maid',
        description:'',
        id:999
    }
    res.status(200).json(response)
}

const putAnime = async (req:Request, res:Response) => {
    const data = req.body
    const anime = await Models.putAnime(data);
    const response = {
        message:'OK',
        retorno: anime,
    }
    res.status(201).json(response)
}


export {getAnimes_random,getAnimes_maid,getAnimes_waifu,putAnime};