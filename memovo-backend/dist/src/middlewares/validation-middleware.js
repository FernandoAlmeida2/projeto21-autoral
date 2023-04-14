"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
var http_status_1 = __importDefault(require("http-status"));
function validateBody(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            res
                .status(http_status_1.default.UNPROCESSABLE_ENTITY)
                .send(error.details.map(function (detail) { return detail.message; }));
            return;
        }
        next();
    };
}
exports.validateBody = validateBody;
