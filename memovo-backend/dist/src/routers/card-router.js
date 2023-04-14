"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRouter = void 0;
var express_1 = require("express");
var cards_controller_1 = require("../controllers/cards-controller");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
exports.cardRouter = (0, express_1.Router)();
exports.cardRouter.all("/*", authentication_middleware_1.authenticateToken).get("/:numCards", cards_controller_1.getCardSession);
