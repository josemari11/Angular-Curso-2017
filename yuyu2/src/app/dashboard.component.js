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
// IMPORTS
var core_1 = require("@angular/core");
var jugador_service_1 = require("./jugador.service");
// DECORATOR DEL COMPONENTE
var DashboardComponent = (function () {
    function DashboardComponent(jugadorService) {
        this.jugadorService = jugadorService;
        this.jugadores = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jugadorService.getJugadores()
            .then(function (jugadores) { return _this.jugadores = jugadores.slice(0, 3); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './html/app.dashboard.html',
        styleUrls: ['./css/dashboard.component.css'],
        providers: [jugador_service_1.JugadorService],
    }),
    __metadata("design:paramtypes", [jugador_service_1.JugadorService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map