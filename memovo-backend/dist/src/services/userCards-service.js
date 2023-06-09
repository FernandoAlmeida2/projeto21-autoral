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
var userCard_constants_1 = require("../constants/userCard-constants");
var boxes_repository_1 = __importDefault(require("../repositories/boxes-repository"));
var user_repository_1 = __importDefault(require("../repositories/user-repository"));
var userCard_repository_1 = __importDefault(require("../repositories/userCard-repository"));
var card_utils_1 = require("../utils/card-utils");
function postLearningSession(userId, userCardsData) {
    return __awaiter(this, void 0, void 0, function () {
        var createdAt, learningSession, firstBoxSession, lastBoxSession, i, _a, boxId, id, box;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, user_repository_1.default.findById(userId)];
                case 1:
                    createdAt = (_b.sent()).createdAt;
                    learningSession = (0, card_utils_1.currentSession)(createdAt).toString();
                    firstBoxSession = userCard_constants_1.SESSION_BOXES[learningSession].filter(function (el) { return el.name.split("-")[0] === learningSession; })[0].name;
                    lastBoxSession = userCard_constants_1.SESSION_BOXES[learningSession].filter(function (el) { return el.name.split("-")[3] === learningSession; })[0].name;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < userCardsData.length)) return [3 /*break*/, 11];
                    return [4 /*yield*/, userCard_repository_1.default.findUserCard(userId, userCardsData[i].cardId)];
                case 3:
                    _a = _b.sent(), boxId = _a.boxId, id = _a.id;
                    return [4 /*yield*/, boxes_repository_1.default.findBox(boxId)];
                case 4:
                    box = (_b.sent()).name;
                    if (!(box === "CURRENT" && userCardsData[i].result === "HIT")) return [3 /*break*/, 6];
                    //update o card pra firtBoxSession
                    return [4 /*yield*/, userCard_repository_1.default.updateBox(id, firstBoxSession)];
                case 5:
                    //update o card pra firtBoxSession
                    _b.sent();
                    _b.label = 6;
                case 6:
                    if (!(box !== "CURRENT" && userCardsData[i].result === "MISS")) return [3 /*break*/, 8];
                    //update o card pra CURRENT
                    return [4 /*yield*/, userCard_repository_1.default.updateBox(id, "CURRENT")];
                case 7:
                    //update o card pra CURRENT
                    _b.sent();
                    _b.label = 8;
                case 8:
                    if (!(box === lastBoxSession && userCardsData[i].result === "HIT")) return [3 /*break*/, 10];
                    //update o card pra RETIRED BOX
                    return [4 /*yield*/, userCard_repository_1.default.updateBox(id, "RETIRED")];
                case 9:
                    //update o card pra RETIRED BOX
                    _b.sent();
                    _b.label = 10;
                case 10:
                    i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    });
}
var userCardsService = {
    postLearningSession: postLearningSession,
};
exports.default = userCardsService;
