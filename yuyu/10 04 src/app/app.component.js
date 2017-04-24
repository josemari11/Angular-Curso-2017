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
    { id: 1, puntos: 200000, name: "Avelina", presentacion: "Soy esquizo.", estado: 1 },
    { id: 2, puntos: 200000, name: "Severo", presentacion: "Limitado como un Borbón", estado: 1 },
    { id: 3, puntos: 200000, name: "Placidia", presentacion: "Me pica...", estado: 1 },
    { id: 4, puntos: 200000, name: "Arnulfo", presentacion: "Me maté en esa curva", estado: 1 },
    { id: 5, puntos: 200000, name: "Braulia", presentacion: "Hola, hamijos", estado: 1 },
    { id: 6, puntos: 200000, name: "Domicio", presentacion: "Tengo tres hipotecas", estado: 1 },
    { id: 7, puntos: 200000, name: "Drusila", presentacion: "Me gusta el orfidal", estado: 1 },
    { id: 8, puntos: 200000, name: "Adalberto", presentacion: "Yo antes molaba", estado: 1, },
    { id: 9, puntos: 200000, name: "Gertrudis", presentacion: "Programo en Angular", estado: 1 },
    { id: 10, puntos: 200000, name: "Filodoro", presentacion: "Pecador de la pradera", estado: 1 },
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
    AppComponent.prototype.newPlayer = function () {
        // Crear un nuevo id al azar
        var idj = parseInt(Math.random() * 10000000);
        var obj = {
            id: idj,
            estado: 1,
            puntos: 0,
            nombre: "",
            presentacion: "",
        };
        // Añado este array de jugadores al array de jugadores de esta clase
        this.jugadores.push(obj);
        // Ahora quiero que aparezca el formulario para editarlo
        //Lo hago invocando la función onSelect,pasándole el objeto que acabo de crear
        this.onSelect();
        obj;
        log();
        void {
            this: .log(this.jugadores)
        };
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