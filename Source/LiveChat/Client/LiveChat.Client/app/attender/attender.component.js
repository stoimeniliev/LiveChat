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
var messages_service_1 = require('../services/messages-service/messages-service');
var AttenderComponent = (function () {
    function AttenderComponent(messagesService) {
        this.messagesService = messagesService;
        this.messagesList = [];
    }
    AttenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService
            .getMessages()
            .subscribe(function (messages) { return _this.messagesList = messages; });
    };
    AttenderComponent.prototype.handleMessage = function (message) {
        var _this = this;
        this.messagesService
            .addMessage(message)
            .subscribe(function (message) { return _this.messagesList.unshift(message); });
    };
    AttenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lc-organizer',
            templateUrl: 'attender.component.html'
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessagesService])
    ], AttenderComponent);
    return AttenderComponent;
}());
exports.AttenderComponent = AttenderComponent;
//# sourceMappingURL=attender.component.js.map