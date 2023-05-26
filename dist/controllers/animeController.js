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
exports.deleteAnime = exports.putAnime = exports.getAnimes_random = void 0;
const animeModel_1 = require("../models/animeModel");
const getAnimes_random = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conteudos = yield animeModel_1.AnimeDatabase.findAll();
    res.status(200).json({ message: 'testando', conteudo: conteudos });
});
exports.getAnimes_random = getAnimes_random;
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
