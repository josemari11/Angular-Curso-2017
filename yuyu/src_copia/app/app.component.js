"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importamos la clase Component del paquete angular/core
var core_1 = require("@angular/core");
// El siguiente código es para configurar la clase que hemos 
// importado
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores";
        this.name = 'mundo, qué originales estamos';
        this.player = {
            id: 1,
            name: "Braulio",
            presentacion: "Me presento, hale, adiós."
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>{{title}}</h1>\n\t<h2>Hola, {{player.name}}</h2>\n\t<p>Prueba de concepto, esto va a cambiar mucho...</p>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Jugador = (function () {
    function Jugador() {
    }
    return Jugador;
}());
exports.Jugador = Jugador;
//# sourceMappingURL=app.component.js.map