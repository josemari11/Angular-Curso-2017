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
        // propiedades privadas
        this.jugadoresUrl = 'api/jugadores'; // URL a la api web
        this.cabeceras = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    JugadorService.prototype.getJugadores = function () {
        return this.http.get(this.jugadoresUrl)
            .toPromise()
            .then(function (datos) { return datos.json().data; })
            .catch(this.queHaPasado);
        /*
        // Esto lo dejop a t�tulo comparativo, para ver c�mo se
        // hace en jquery algo SIMILAR a las promesas en ES6
        $.ajax({
            url:this.jugadoresUrl,
            dataType:"json",
            success: function(datos){
                return datos;
            },
            error: funcion(queHaPasado){
                console.log(queHaPasado);
            }
        })
        */
    };
    JugadorService.prototype.getJugador = function (id) {
        // En js tradicional de toda la vida
        //var url = this.jugadoresUrl + "/" + id;
        // En ES6, con templates de cadena
        var url = this.jugadoresUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    JugadorService.prototype.queHaPasado = function (error) {
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    };
    JugadorService.prototype.update = function (jugador) {
        var URL = this.jugadoresUrl + "/" + jugador.id;
        return this.http.put(URL, JSON.stringify(jugador), { headers: this.cabeceras })
            .toPromise()
            .then(function () { return jugador; })
            .catch(this.queHaPasado);
    };
    JugadorService.prototype.crear = function (nombre) {
        return this.http.post(this.jugadoresUrl, JSON.stringify({ name: nombre, estado: 3 }), { headers: this.cabeceras })
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    JugadorService.prototype.delete = function (id) {
        var URL = this.jugadoresUrl + "/" + id;
        return this.http.delete(URL, { headers: this.cabeceras })
            .toPromise()
            .then(function () { return null; })
            .catch(this.queHaPasado);
    };
    return JugadorService;
}());
JugadorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JugadorService);
exports.JugadorService = JugadorService;
//# sourceMappingURL=jugador.service.js.map