"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string()
        .min(6)
        .pattern(new RegExp("^[a-zA-Z0-9]*$"))
        .required(),
    repeat_password: joi_1.default.ref("password"),
}).with("password", "repeat_password");
