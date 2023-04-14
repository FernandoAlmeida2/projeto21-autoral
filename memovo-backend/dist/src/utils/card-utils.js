"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCardsId = exports.currentSession = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
function currentSession(startDay) {
    var learningCicleDays = 10;
    var beginDate = (0, dayjs_1.default)(startDay);
    var endDate = (0, dayjs_1.default)();
    var daysDiff = endDate.diff(beginDate, "day");
    if (daysDiff > learningCicleDays) {
        return 0;
    }
    if (beginDate.hour() + (endDate.diff(beginDate, "hour") % 24) >= 24) {
        daysDiff++;
    }
    return daysDiff % learningCicleDays;
}
exports.currentSession = currentSession;
function sortCardsId(data, numCards) {
    var sortedCards = [];
    for (var i = 0; i < numCards; i++) {
        var indexSorted = Math.floor(Math.random() * data.length);
        sortedCards.push(data[indexSorted]);
        data.splice(indexSorted, 1);
    }
    return sortedCards.map(function (elem) {
        return { id: elem.cardId };
    });
}
exports.sortCardsId = sortCardsId;
