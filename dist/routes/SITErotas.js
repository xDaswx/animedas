"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animeSITEController_1 = __importDefault(require("../controllers/animeSITEController"));
const router = (0, express_1.default)();
router.get('/home', animeSITEController_1.default.home);
router.get('/gallery', animeSITEController_1.default.gallery);
router.get('/see/:id', animeSITEController_1.default.seeByID);
exports.default = router;
