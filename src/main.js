"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var kinvey_angular2_sdk_1 = require('kinvey-angular2-sdk');
var app_module_1 = require('./app/app.module');
kinvey_angular2_sdk_1.Kinvey.initialize({
    appKey: 'kid_WJt3WXdOpx',
    appSecret: '7cfd74e7af364c8f90b116c835f92e7d'
})
    .then(function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=main.js.map