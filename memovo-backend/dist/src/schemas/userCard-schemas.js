"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSessionSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.postSessionSchema = joi_1.default.object({
    cards: joi_1.default.array()
        .items(joi_1.default.object({
        cardId: joi_1.default.number().integer().min(1).required(),
        result: joi_1.default.string().valid("HIT", "MISS"),
    }))
        .required(),
});
