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
// The root of the app from a developer stand point.
// Every service and other global dependency is registered here.
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api'); // For development only. Creates an in-memori db.
var message_data_1 = require('./services/messages-service/messages-mock/message-data'); // Mock service for messages.
require('./rxjs-operators');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var organizer_component_1 = require('./organizer/organizer.component');
var attender_component_1 = require('./attender/attender.component');
var messages_list_component_1 = require('./messages/messages-list/messages-list.component');
var message_input_componet_1 = require('./messages/message-input/message-input.componet');
var message_component_1 = require('./messages/message/message.component');
var messages_service_1 = require('./services/messages-service/messages-service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(message_data_1.MessageData),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                organizer_component_1.OrganizerComponent,
                attender_component_1.AttenderComponent,
                message_input_componet_1.MessageInputComponent,
                messages_list_component_1.MessagesListComponent,
                message_component_1.MessageComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                messages_service_1.MessagesService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map