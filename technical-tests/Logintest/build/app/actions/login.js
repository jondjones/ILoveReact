"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = login;
function login(_ref) {
    var username = _ref.username,
        password = _ref.password;

    return function (dispatch, getState) {
        return console.log("username: " + username, "username: " + password);
    };
}