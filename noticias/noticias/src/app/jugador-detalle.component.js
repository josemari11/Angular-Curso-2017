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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var jugador_1 = require("./jugador");
var jugador_service_1 = require("./jugador.service");
require("rxjs/add/operator/switchMap"); // EXPLICAR MÁS ADELANTE!!
var JugadorDetalleComponent = (function () {
    function JugadorDetalleComponent(jugadorService, route, location) {
        this.jugadorService = jugadorService;
        this.route = route;
        this.location = location;
    }
    JugadorDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.jugadorService.getJugador(+params['id']); })
            .subscribe(function (jugador) { return _this.jugador = jugador; });
    };
    JugadorDetalleComponent.prototype.patras = function () {
        this.location.back();
    };
    JugadorDetalleComponent.prototype.guardar = function () {
        var _this = this;
        this.jugadorService.update(this.jugador)
            .then(function () { return _this.patras; });
        //////////////////////////////////////////////////
        /*var errores = "";
        
        var nombre = document.getElementById("ctrlNombre");
        var puntos = document.getElementById("ctrlPuntos");
        var estado = document.getElementById("ctrlEstado");
        var presentacion = document.getElementById("ctrlPresentacion");
        
        if(nombre['value'] == ""){
            errores = errores + "El nombre es obligatorio\n";
        }
        if(puntos['value'] == ""){
            errores = errores + "Debes introducir los puntos\n";
        }
        if(presentacion['value'] == ""){
            errores = errores + "No presrentarse es de mala educación\n";
        }
        
        if(errores != ""){
            alert(errores);
        }*/
    };
    return JugadorDetalleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof jugador_1.Jugador !== "undefined" && jugador_1.Jugador) === "function" && _a || Object)
], JugadorDetalleComponent.prototype, "jugador", void 0);
JugadorDetalleComponent = __decorate([
    core_1.Component({
        selector: 'jugador-detalle',
        templateUrl: './html/jugador-detalle.component.html',
        styleUrls: ['./css/jugador-detalle.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof jugador_service_1.JugadorService !== "undefined" && jugador_service_1.JugadorService) === "function" && _b || Object, router_1.ActivatedRoute, common_1.Location])
], JugadorDetalleComponent);
exports.JugadorDetalleComponent = JugadorDetalleComponent;
var _a, _b;
//# sourceMappingURL=jugador-detalle.component.js.map