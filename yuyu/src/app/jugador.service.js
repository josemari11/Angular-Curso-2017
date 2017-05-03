"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_jugadores_1 = require("./mock-jugadores");
//Esto hay que ponerlo por narices. Le dice a angular que emita 
//metadatos para el servicio. por si más tarde hay que añadirle dependencias
//al igual que @components hay que añadirlo, aunque este vacio
var JugadorService = (function () {
    // Este servicio podría obtener los datos de cualquier sitiio:
    //servicios web, localStorage, o un archivo de datos mockeados, p.el;
    function JugadorService() {
    }
    // Esta clase tiene un método  llamado getjugadores que devuelve 
    // un array de objetos de tipo Jugadores
    JugadorService.prototype.getJugadores = function () {
        return mock_jugadores_1.JUGADORES;
    };
    return JugadorService;
}());
JugadorService = __decorate([
    core_1.Injectable()
], JugadorService);
exports.JugadorService = JugadorService;
//# sourceMappingURL=Jugador.service.js.map