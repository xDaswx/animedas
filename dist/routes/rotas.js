"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/ata', (req, res) => {
    res.send('aaaaaa');
});
router.get('/', (req, res) => {
    //rota estaticas
    res.send('<h1>aaaaaaaaaaaaa</h1>');
});
router.get('/natzaum/:slug', (req, res) => {
    //rota dinamica
    const param = req.params.slug;
    res.send(`param: ${param}`);
});
router.get('/natzaumv2/:vai-:onde', (req, res) => {
    //rota dinamica
    const { vai, onde } = req.params;
    res.send(`param: ${vai.toUpperCase()} ${onde.toUpperCase()}`);
});
exports.default = router;
