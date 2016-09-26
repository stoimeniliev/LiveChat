"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_1 = require('./message');
var MessageComponent = (function () {
    function MessageComponent() {
        this.author = '';
        this.content = '';
    }
    MessageComponent.prototype.ngOnInit = function () { };
    MessageComponent.prototype.submitMessage = function () {
        this.message = new message_1.Message(this.author, this.content);
        console.log(this.message.getMessage());
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lc-message',
            templateUrl: 'message.component.html',
            styles: [
                "label {\n\t\t\tdisplay: inline;\n\t\t\tfont-weight: bold;\n\t\t}",
                "label:before, label:after {\n\t\t\tcontent: \"\\A\";\n\t\t\twhite-space: pre;\n\t\t}",
                "button {\n\t\t\tdisplay: block;\n\t\t}"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.componet.js.map