"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCardsRouter = void 0;
var express_1 = require("express");
var userCard_controller_1 = require("../controllers/userCard-controller");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var validation_middleware_1 = require("../middlewares/validation-middleware");
var userCard_schemas_1 = require("../schemas/userCard-schemas");
exports.userCardsRouter = (0, express_1.Router)();
exports.userCardsRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/", (0, validation_middleware_1.validateBody)(userCard_schemas_1.postSessionSchema), userCard_controller_1.postLearningSession);
