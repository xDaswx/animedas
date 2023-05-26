"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldvalidator = (req, res, next) => {
    const required = ['tag_type', 'width', 'height', 'source', 'url', 'description'];
    for (const fields of required)
        if (!(fields in req.body)) {
            return res.status(400).send({ message: 'Fields missing', missing: fields });
        }
    next();
};
exports.default = fieldvalidator;
