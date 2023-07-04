"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnime = exports.putAnime = exports.getSome = exports.getRandomGenshin = exports.getRandomSmug = exports.getRandomWaifu = exports.getRandomMaid = exports.getRandom = void 0;
const animeModel_1 = require("../models/animeModel");
const pg_connection_1 = require("../instances/pg_connection");
const getSome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let animes = yield animeModel_1.AnimeDatabase.findAll({
            order: pg_connection_1.sequelize.random(),
            limit: 20,
        });
        if (animes === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: null });
        }
        res.status(200).json({ message: 'Successful', content: animes });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getSome = getSome;
const getRandom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conteudos = yield animeModel_1.AnimeDatabase.findOne({
            order: pg_connection_1.sequelize.random(),
            limit: 1
        });
        if (conteudos === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: conteudos });
        }
        res.status(200).json({ message: 'Successful', content: conteudos });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getRandom = getRandom;
const getRandomMaid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conteudos = yield animeModel_1.AnimeDatabase.findOne({
            where: {
                tag_type: 'maid'
            },
            order: pg_connection_1.sequelize.random(),
        });
        if (conteudos === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: conteudos });
        }
        res.status(200).json({ message: 'Successful', content: conteudos });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getRandomMaid = getRandomMaid;
const getRandomWaifu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conteudos = yield animeModel_1.AnimeDatabase.findOne({
            where: {
                tag_type: 'waifu'
            },
            order: pg_connection_1.sequelize.random(),
        });
        if (conteudos === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: conteudos });
        }
        res.status(200).json({ message: 'Successful', content: conteudos });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getRandomWaifu = getRandomWaifu;
const getRandomSmug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conteudos = yield animeModel_1.AnimeDatabase.findOne({
            where: {
                tag_type: 'smug'
            },
            order: pg_connection_1.sequelize.random(),
        });
        if (conteudos === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: conteudos });
        }
        res.status(200).json({ message: 'Successful', content: conteudos });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getRandomSmug = getRandomSmug;
const getRandomGenshin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let conteudos = yield animeModel_1.AnimeDatabase.findOne({
            where: {
                tag_type: 'genshin '
            },
            order: pg_connection_1.sequelize.random(),
            limit: 1
        });
        if (conteudos === null) {
            return res.status(200).json({ message: { error: 'No Content', status: 204 }, content: conteudos });
        }
        res.status(200).json({ message: 'Successful', content: conteudos });
    }
    catch (err) {
        res.status(200).json({ message: 'Error', content: [] });
    }
});
exports.getRandomGenshin = getRandomGenshin;
const putAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tag_type, width, height, source, url, description, secret_key } = req.body;
    if (secret_key !== process.env.SECRET_KEY)
        return res.status(403).json({ message: 'Wrong SecretKey' });
    try {
        const put = yield animeModel_1.AnimeDatabase.create({
            tag_type: tag_type,
            width: parseInt(width),
            height: parseInt(height),
            source: source,
            url: url,
            description: description,
        });
        return res.status(201).json({ message: 'OK', response: put });
    }
    catch (error) {
        console.log('Requisição erro:', error);
        return res.status(401).json({ message: 'Error' });
    }
});
exports.putAnime = putAnime;
const deleteAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, secret_key } = req.body;
    if (secret_key !== process.env.SECRET_KEY)
        return res.status(403).json({ message: 'Wrong SecretKey' });
    try {
        let AnimeDeleteById = yield animeModel_1.AnimeDatabase.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: `ID ${1} deleted`, information: AnimeDeleteById });
    }
    catch (error) {
        console.log('delete/anime endpoint:', error);
        return res.status(400).json({ message: 'Error' });
    }
});
exports.deleteAnime = deleteAnime;
