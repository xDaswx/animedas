import {sequelize} from '../instances/pg_connection'
import {Model, DataTypes} from 'sequelize'
require('dotenv').config()


export interface AnimeModel extends Model {
    id:number;
    tag_type:string;
    width:string;
    height:string;
    source:string;
    url:string;
    description:string;
}

export const AnimeDatabase = sequelize.define<AnimeModel>('AnimeDatabase',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    tag_type:{
        type: DataTypes.STRING
    },
    width:{
        type: DataTypes.STRING
    },
    height:{
        type: DataTypes.STRING
    },
    source:{
        type: DataTypes.STRING
    },
    url:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
},{
    tableName:'images',
    timestamps:false
}

)