"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importamos la clase Component del paquete angular/core
var core_1 = require("@angular/core");
var boca_1 = require("./boca");
var JUGADORES = [
    { id: 1, name: "Avelina", presentacion: "Soy esquizo." },
    { id: 2, name: "Severo", presentacion: "Limitado como un Borbón" },
    { id: 3, name: "Placidia", presentacion: "Me pica..." },
    { id: 4, name: "Arnulfo", presentacion: "Me maté en esa curva" },
    { id: 5, name: "Braulia", presentacion: "Hola, hamijos" },
    { id: 6, name: "Domicio", presentacion: "Tengo tres hipotecas" },
    { id: 7, name: "Drusila", presentacion: "Me gusta el orfidal" },
    { id: 8, name: "Adalberto", presentacion: "Yo antes molaba" },
    { id: 9, name: "Gertrudis", presentacion: "Programo en Angular" },
    { id: 10, name: "Filodoro", presentacion: "Pecador de la pradera" },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores...";
        this.jugadores = JUGADORES;
        this.altavoz = new boca_1.Boca();
    }
    AppComponent.prototype.onSelect = function (player) {
        // Cuando trabajemos con eventos, ten en cuenta que 
        // TypeScript entiende que lo que hay aquí dentro 
        // pertenece al objeto que ha originado el evento, no a 
        // la clase AppComponent. Para acceder a otros miembros
        // de dicha clase tenemos que usar "this."
        this.selPlayer = player;
        this.altavoz.habla(player.presentacion);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './html/app.component.html',
        styleUrls: ['./css/app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map