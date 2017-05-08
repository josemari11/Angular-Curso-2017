"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var jugadores_component_1 = require("./jugadores.component");
var dashboard_component_1 = require("./dashboard.component");
var jugador_service_1 = require("./jugador.service");
var jugador_detalle_component_1 = require("./jugador-detalle.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'jugadores', component: jugadores_component_1.JugadoresComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            ]) //módulo del router,
        ],
        declarations: [app_component_1.AppComponent, jugador_detalle_component_1.JugadorDetalleComponent,
            jugadores_component_1.JugadoresComponent, dashboard_component_1.DashboardComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [jugador_service_1.JugadorService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map