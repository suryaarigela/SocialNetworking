"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var not_found_component_1 = require('./not-found.component');
exports.appRouting = router_1.RouterModule.forRoot([
    {
        path: '', component: home_component_1.HomeComponent
    },
    {
        path: '**', component: not_found_component_1.NotFoundComponent
    }
]);
//# sourceMappingURL=app.routing.js.map