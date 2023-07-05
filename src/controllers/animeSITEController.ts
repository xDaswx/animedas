import {Request,Response} from "express";
import {AnimeDatabase} from '../models/animeModel'
import axios from "axios";
import path from "path";


const dir = path.join(__dirname,'../views')
const home = ((req:Request, res:Response)=> {

    const phrases = [
            'Expand Your Anime Image Library with an Additional API Integration',
            'Discover a Second API Source for Anime Icons on Our Website',
            'Level up Your Anime Image Repository with a Second API Connection',
            'Access a Diverse Selection of Anime Icons with Another API Integration']

    const random = Math.floor(Math.random() * phrases.length)

    res.render(dir+'/home',{home:{title:phrases[random],img:'noone'}})
})

const gallery = ((req:Request, res:Response)=> {

    res.render(dir+'/gallery')
})

const galleryMaid =  ( async (req:Request, res:Response)=> {
    const serverUrl = `${req.protocol}://${req.headers.host}`;
    //const request = await axios.get(serverUrl+'/gallery/maid')
    console.log(serverUrl)

    res.render(dir+'/galleryMany',{endpoint:'request'})
})

const galleryWaifu = ((req:Request, res:Response)=> {

    res.render(dir+'/galleryMany',{endpoint:'/api/v1/random/waifu'})
})

const gallerySmug = ((req:Request, res:Response)=> {

    res.render(dir+'/galleryMany',{endpoint:'/api/v1/random/smug'})
})

const galleryGenshin = ((req:Request, res:Response)=> {

    res.render(dir+'/galleryMany',{endpoint:'/api/v1/random/genshin'})
})

const seeByID = (async (req:Request, res:Response)=>{
    const id = req.params?.id
    try{
        let have_images = true;
        const image = await AnimeDatabase.findOne({
            where:{
                id:id
            }
        }).catch((error)=>{
            console.log('deu erro:', error)
        })
        if (image === null) have_images = false
        res.render(dir+'/preview',{image,have_images})

    }    
    catch (err){
        console.log('seeByID ERROR:'+err)
    }


})

export default {home,gallery,galleryMaid,galleryWaifu,gallerySmug,galleryGenshin,seeByID}