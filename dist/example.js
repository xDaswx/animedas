"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loop_string_1 = __importDefault(require("./loop_string")); //maneira de import é assim pois esta sendo utilizado export default
const validator_1 = __importDefault(require("validator"));
loop_string_1.default.Loop('rodar');
const nome = 'ryan';
if (validator_1.default.isLowercase(nome)) {
    console.log('é pequeno');
}
else {
    console.log('Não é pequeno');
}
