"use strict";
var MessageData = (function () {
    function MessageData() {
    }
    MessageData.prototype.createDb = function () {
        var messages = [];
        return { messages: messages };
    };
    return MessageData;
}());
exports.MessageData = MessageData;
//# sourceMappingURL=message-data.js.map