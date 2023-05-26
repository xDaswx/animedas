"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeDatabase = void 0;
const pg_connection_1 = require("../instances/pg_connection");
const sequelize_1 = require("sequelize");
require('dotenv').config();
exports.AnimeDatabase = pg_connection_1.sequelize.define('AnimeDatabase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    tag_type: {
        type: sequelize_1.DataTypes.STRING
    },
    width: {
        type: sequelize_1.DataTypes.INTEGER
    },
    height: {
        type: sequelize_1.DataTypes.INTEGER
    },
    source: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'animedas',
    timestamps: false
});
