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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAnime = exports.getRandomAnime = void 0;
const connection_1 = __importDefault(require("./connection"));
require('dotenv').config();
const getRandomAnime = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield connection_1.default.query('SELECT * FROM "images"');
        return query.rows;
    }
    catch (error) {
        console.log(error);
        return 'Error ao obter dados';
    }
});
exports.getRandomAnime = getRandomAnime;
const putAnime = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.secret_key != process.env.SECRET_KEY)
        return 'Key incorreta';
    const hora = new Date().toUTCString();
    try {
        const query = yield connection_1.default.query('INSERT INTO "images" (uploaded_at,source,type,description) VALUES ($1, $2, $3, $4)', [hora, data.url, data.type, data.description]);
        return query.rowCount;
    }
    catch (error) {
        console.log(error);
        return 'Error ao obter dados';
    }
});
exports.putAnime = putAnime;
