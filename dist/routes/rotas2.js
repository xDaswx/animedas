"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routers2 = (0, express_1.Router)();
routers2.get('/', (req, res) => {
    res.send('adminnnnnnnnn oooooooooooooooo');
});
routers2.get('/v2', (req, res) => {
    res.send('adminnnasdasdsadoooooooooo');
});
exports.default = routers2;
