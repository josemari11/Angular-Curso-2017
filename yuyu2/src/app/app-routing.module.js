"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// IMPORTS
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jugadores_component_1 = require("./jugadores.component");
var dashboard_component_1 = require("./dashboard.component");
var jugador_detalle_component_1 = require("./jugador-detalle.component");
// DEFINIMOS UN ARRAY DE RUTAS
var routes = [
    { path: 'jugadores', component: jugadores_component_1.JugadoresComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detalle/:id', component: jugador_detalle_component_1.JugadorDetalleComponent }
];
// DECORATOR DE LA CLASE
var AppRoutingModule = (function () {
    // EXPORTAMOS LA CLASE
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map