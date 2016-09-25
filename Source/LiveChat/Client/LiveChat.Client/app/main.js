"use strict";
// Starting point of the application from the stand point of angular. Angular sees the bootstrapModule function and starts AppModule.
// Basically says that the root of the app is AppModulse.
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map