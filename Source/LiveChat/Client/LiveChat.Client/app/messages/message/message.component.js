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
    }
    MessageComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lc-message',
            templateUrl: 'message.component.html',
            styles: [
                "\n\t\th1 {\n\t\t\tcolor: #369;\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t\tfont-size: 250%;\n\t\t}\n\t\th2,\n\t\th3 {\n\t\t\tcolor: #444;\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t\tfont-weight: lighter;\n\t\t}\n\t\t"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map