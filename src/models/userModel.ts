import {sequelize} from '../instances/pg_connection'
import {Model, DataTypes} from 'sequelize'
require('dotenv').config()


export interface UsersModel extends Model {
    id:number;
    name:string;
    isAdmin:boolean;
    password:string;
}

export const User = sequelize.define<UsersModel>('User',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    isAdmin:{
        type: DataTypes.BOOLEAN
    },
    password:{
        type: DataTypes.STRING
    },
},{
    tableName:'animedasUsers',
    timestamps:false
}
)