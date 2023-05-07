import db from './connection'


const getRandomAnime = async () =>{
    try{
        const query = await db.query('SELECT * FROM "Accounts"')
        return query.rows
    }catch (error){
        console.log(error)
        return 'Error ao obter dados'
    }
    
}

export default getRandomAnime;