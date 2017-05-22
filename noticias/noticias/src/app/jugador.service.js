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
var jugador_1 = require("./jugador");
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
        //Esto es la traducci�n al arrow de arriba
        /*
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
        //var url = this.jugadoresUrl + "/" +id;
        var URL = "$(this.jugadoresUrl)/$(id)";
        return this.http.get(URL)
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
        /*return this.getJugadores()
            .then(jugadores => jugadores.find( jugador => jugador.id == id ));*/
    };
    JugadorService.prototype.queHaPasado = function (error) {
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    };
    JugadorService.prototype.update = function (jugador) {
        var URL = this.jugadoresUrl + "/" + jugador.id;
        return this.http
            .put(URL, JSON.stringify(jugador_1.Jugador), { headers: this.cabeceras })
            .toPromise()
            .then(function () { return jugador; })
            .catch(this.queHaPasado);
    };
    JugadorService.prototype.crear = function (nombre) {
        return this.http
            .post(this.jugadoresUrl, JSON.stringify(jugador), { headers: this.cabeceras })
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
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