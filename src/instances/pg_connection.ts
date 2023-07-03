import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DATABASE as string,
    process.env.USER as string,
    process.env.PASSWORD as string,
    {
        host: process.env.HOST as string,
        dialect: 'postgres',
        port: 7018
    }
)

sequelize
.authenticate()
.then(()=>{console.log('Conexão ao banco de dados bem sucedida')})
.catch((error) =>{
    console.log('Erro ao se conectar no banco de dados: ', error)
})