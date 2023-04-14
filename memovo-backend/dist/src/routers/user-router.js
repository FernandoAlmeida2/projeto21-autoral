"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user-controller");
var validation_middleware_1 = require("../middlewares/validation-middleware");
var user_schemas_1 = require("../schemas/user-schemas");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", (0, validation_middleware_1.validateBody)(user_schemas_1.userSchema), user_controller_1.postUser);
