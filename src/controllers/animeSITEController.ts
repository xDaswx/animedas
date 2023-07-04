import {Request,Response} from "express";
import path from "path";

const home = ((req:Request, res:Response)=> {

    const phrases = [
            'Expand Your Anime Image Library with an Additional API Integration',
            'Discover a Second API Source for Anime Icons on Our Website',
            'Level up Your Anime Image Repository with a Second API Connection',
            'Access a Diverse Selection of Anime Icons with Another API Integration']

    const random = Math.floor(Math.random() * phrases.length)
    const dir = path.join(__dirname,'../views')

    res.render(dir+'/home',{home:{title:phrases[random],img:'noone'}})
})

const gallery = ((req:Request, res:Response)=> {

    const dir = path.join(__dirname,'../views')

    res.render(dir+'/gallery')
})

export default {home,gallery}