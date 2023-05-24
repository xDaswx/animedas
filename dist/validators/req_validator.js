"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldvalidator = (req, res, next) => {
    const { url, description, type } = req.body;
    if (!url || !description || !type) {
        return res.status(400).send({ message: 'Requesição não foi aceita pois não foi informado as fields necessárias', missing: ["url", "description", "type"] });
    }
    next();
};
exports.default = fieldvalidator;
