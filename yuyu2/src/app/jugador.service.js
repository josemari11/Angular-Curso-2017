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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si m�s tarde hay que a�adirle dependencias
var JugadorService = (function () {
    function JugadorService(http) {
        this.http = http;
        //propiedades privadas
        this.jugadoresUrl = 'api/jugadores';
    }
    JugadorService.prototype.getJugadores = function () {
        //return Promise.resolve(JUGADORES);
        return this.http.get(this.jugadoresUrl)
            .toPromise()
            .then(function (datos) { return datos.json().data; })
            .catch(this.queHaPasado);
    };
    JugadorService.prototype.getJugador = function (id) {
        return this.getJugadores()
            .then(function (jugadores) { return jugadores.find(function (jugador) { return jugador.id == id; }); });
    };
    JugadorService.prototype.queHaPasado = function (error) {
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    };
    return JugadorService;
}());
JugadorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JugadorService);
exports.JugadorService = JugadorService;
//# sourceMappingURL=jugador.service.js.map