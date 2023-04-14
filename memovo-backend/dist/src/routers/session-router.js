"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
var express_1 = require("express");
var session_controller_1 = require("../controllers/session-controller");
var validation_middleware_1 = require("../middlewares/validation-middleware");
var session_schemas_1 = require("../schemas/session-schemas");
exports.sessionRouter = (0, express_1.Router)();
exports.sessionRouter.post("/", (0, validation_middleware_1.validateBody)(session_schemas_1.signInSchema), session_controller_1.postSession);
