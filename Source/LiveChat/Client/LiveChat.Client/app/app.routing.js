"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var organizer_component_1 = require('./organizer/organizer.component');
var attender_component_1 = require('./attender/attender.component');
var appRoutes = [
    { path: 'organizer', component: organizer_component_1.OrganizerComponent },
    { path: 'attender', component: attender_component_1.AttenderComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map