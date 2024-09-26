import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_URL as string)

sequelize
.authenticate()
.then(()=>{console.log('Conexão ao banco de dados bem sucedida')})
.catch((error) =>{
    console.log('Erro ao se conectar no banco de dados: ', error)
})