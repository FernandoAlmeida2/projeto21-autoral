"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicatedEmailError = void 0;
function duplicatedEmailError() {
    return {
        name: "DuplicatedEmailError",
        message: "There is already a user with the given email",
    };
}
exports.duplicatedEmailError = duplicatedEmailError;
