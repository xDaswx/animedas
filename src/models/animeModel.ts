import db from './connection'
require('dotenv').config()


const getRandomAnime = async () =>{
    try{
        const query = await db.query('SELECT * FROM "images"')
        return query.rows
    }catch (error){
        console.log(error)
        return 'Error ao obter dados'
    }
}


const putAnime = async (data:any) =>{
    if (data.secret_key != process.env.SECRET_KEY) return 'Key incorreta'

    const hora = new Date().toUTCString()
    try{
        const query = await db.query('INSERT INTO "images" (uploaded_at,source,type,description) VALUES ($1, $2, $3, $4)', [hora, data.url,data.type,data.description]);
        return query.rowCount
    }catch (error){
        console.log(error)
        return 'Error ao obter dados'
    }
}


export {getRandomAnime,putAnime}