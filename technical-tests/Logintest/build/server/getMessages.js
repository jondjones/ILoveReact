'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getMessages;

var _messageformat = require('messageformat');

var _messageformat2 = _interopRequireDefault(_messageformat);

var _messages = require('../app/messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiledMessages = new _messageformat2.default(Object.keys(_messages2.default)).compile(_messages2.default);

function getMessages(language) {
    return compiledMessages[language] || compiledMessages.en;
}