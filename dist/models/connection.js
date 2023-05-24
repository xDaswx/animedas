"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
const db = new pg_1.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database', err.stack);
    }
    else {
        console.log('Connected to PostgreSQL database');
    }
});
exports.default = db;
