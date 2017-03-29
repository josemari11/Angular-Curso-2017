"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jug.";
        this.name = 'Mundo, qué hacemos';
        this.player = {
            id: 1,
            name: "Braulio",
            presentacion: presentacion
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h1>Hola {{name}}</h1>\n  <h2>Hola {{player}}</h2>\n  <p> desconocido us\u00F3 una galer\u00EDa de textos y los mezcl\u00F3 de tal manera que logr\u00F3 hacer un libro de textos especimen.</p>\n  \n  ",
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