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
// Importamos la clase Component del paquete angular/core
var core_1 = require("@angular/core");
var boca_1 = require("./boca");
var JUGADORES = [
    { id: 1, estado: 1, puntos: 200000, name: "Avelina", presentacion: "Soy esquizo." },
    { id: 2, estado: 2, puntos: 195000, name: "Severo", presentacion: "Limitado como un Borbón" },
    { id: 3, estado: 3, puntos: 175000, name: "Placidia", presentacion: "Me pica..." },
    { id: 4, estado: 4, puntos: 120000, name: "Arnulfo", presentacion: "Me maté en esa curva" },
    { id: 5, estado: 3, puntos: 95000, name: "Braulia", presentacion: "Hola, hamijos" },
    { id: 6, estado: 2, puntos: 75000, name: "Domicio", presentacion: "Tengo tres hipotecas" },
    { id: 7, estado: 1, puntos: 50000, name: "Drusila", presentacion: "Me gusta el orfidal" },
    { id: 8, estado: 2, puntos: 20000, name: "Adalberto", presentacion: "Yo antes molaba" },
    { id: 9, estado: 3, puntos: 15000, name: "Gertrudis", presentacion: "Programo en Angular" },
    { id: 10, estado: 4, puntos: 7500, name: "Filodoro", presentacion: "Pecador de la pradera" },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores...";
        this.jugadores = JUGADORES;
        this.altavoz = new boca_1.Boca();
        // Este método se ejecuta automáticamente cuando un
        // componente se instancia en la página. 
        console.log("Hola, amigos, acabo de nacer");
    }
    AppComponent.prototype.ngOnInit = function () {
        // Este método se ejecuta después de constructor(),
        // cuando todas las clases del componente han terminado
        // de inicializarse
        console.log("Hola, amigos, he terminado de iniciarme");
    };
    AppComponent.prototype.onSelect = function (player) {
        this.selPlayer = player;
        this.altavoz.habla(player.presentacion);
    };
    AppComponent.prototype.onDelete = function (player) {
        var x = confirm("¿Estás seguro de que deseas eliminar a este usuario?\nMira que aquí no valen los CTRL + Z");
        if (x == false)
            return;
        for (var indice in this.jugadores) {
            if (this.jugadores[indice].id == player.id) {
                this.jugadores.splice(indice, 1);
                this.selPlayer = null;
            }
        }
    };
    AppComponent.prototype.newPlayer = function () {
        // Voy a crear un nuevo id al azar. ÑAPACODE WARNING!!
        var idj = Number(Math.random() * 1000000000);
        // creo un objeto temporal con las props del nuevo jugador
        var obj = {
            id: idj,
            estado: 1,
            puntos: 0,
            name: "",
            presentacion: "",
        };
        // Añado este objeto al array de jugadores de esta clase
        this.jugadores.push(obj);
        // Ahora quiero que aparezca el formulario para editarlo
        // Lo hago invocando la función onSelect, pasándole el 
        // objeto que acabo de crear
        this.onSelect(obj);
    };
    AppComponent.prototype.log = function () {
        console.log(this.jugadores);
    };
    AppComponent.prototype.guardar = function () {
        console.log("guardando...");
        var cadena = JSON.stringify(this.jugadores);
        localStorage.setItem("jugadores", cadena);
    };
    AppComponent.prototype.cargar = function () {
        console.log("cargando...");
        var cadena = localStorage.getItem("jugadores");
        // Hemos recuperado los datos, pero están como una cadena
        // de texto, y tenemos que convertirlos a la estructura
        // original. Para eso usaremos el objeto JSON
        this.jugadores = JSON.parse(cadena);
        this.selPlayer = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './html/app.component.html',
        styleUrls: ['./css/app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map