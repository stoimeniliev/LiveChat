"use strict";
var Message = (function () {
    function Message(author, content) {
        this.author = author;
        this.content = content;
    }
    Message.prototype.getMessage = function () {
        return this.author + ": " + this.content;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map