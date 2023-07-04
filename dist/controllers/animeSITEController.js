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
const animeModel_1 = require("../models/animeModel");
const path_1 = __importDefault(require("path"));
const dir = path_1.default.join(__dirname, '../views');
const home = ((req, res) => {
    const phrases = [
        'Expand Your Anime Image Library with an Additional API Integration',
        'Discover a Second API Source for Anime Icons on Our Website',
        'Level up Your Anime Image Repository with a Second API Connection',
        'Access a Diverse Selection of Anime Icons with Another API Integration'
    ];
    const random = Math.floor(Math.random() * phrases.length);
    res.render(dir + '/home', { home: { title: phrases[random], img: 'noone' } });
});
const gallery = ((req, res) => {
    res.render(dir + '/gallery');
});
const seeByID = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        let have_images = true;
        const image = yield animeModel_1.AnimeDatabase.findOne({
            where: {
                id: id
            }
        }).catch((error) => {
            console.log('deu erro:', error);
        });
        console.log(image);
        if (image === null)
            have_images = false;
        res.render(dir + '/preview', { image, have_images });
    }
    catch (err) {
        console.log('seeByID ERROR:' + err);
    }
}));
exports.default = { home, gallery, seeByID };
