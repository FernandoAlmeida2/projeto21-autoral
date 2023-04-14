"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var invalid_credentials_error_1 = require("../errors/user-errors/invalid-credentials-error");
var user_repository_1 = __importDefault(require("../repositories/user-repository"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var session_repository_1 = __importDefault(require("../repositories/session-repository"));
function signIn(data) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, userExists, isPasswordCorrect, token, sessionExists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = data.email, password = data.password;
                    return [4 /*yield*/, user_repository_1.default.findByEmail(email)];
                case 1:
                    userExists = _a.sent();
                    if (!userExists) {
                        throw (0, invalid_credentials_error_1.invalidCredentialsError)();
                    }
                    return [4 /*yield*/, bcrypt_1.default.compare(password, userExists.password)];
                case 2:
                    isPasswordCorrect = _a.sent();
                    if (!isPasswordCorrect) {
                        throw (0, invalid_credentials_error_1.invalidCredentialsError)();
                    }
                    return [4 /*yield*/, session_repository_1.default.findByUserId(userExists.id)];
                case 3:
                    sessionExists = _a.sent();
                    if (!!sessionExists) return [3 /*break*/, 5];
                    token = generateToken(userExists.id);
                    return [4 /*yield*/, session_repository_1.default.createSession(token, userExists.id)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    token = sessionExists.token;
                    _a.label = 6;
                case 6: return [2 /*return*/, {
                        name: userExists.name,
                        userId: userExists.id,
                        token: token,
                    }];
            }
        });
    });
}
function generateToken(id) {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.JWT_SECRET);
}
var sessionService = {
    signIn: signIn,
};
exports.default = sessionService;
