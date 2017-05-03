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
var jugador_1 = require("./jugador");
var boca_1 = require("./boca");
var Jugador_service_1 = require("./Jugador.service");
//Decorador Ajusta varias propiedades de nuestro componente
var AppComponent = (function () {
    //Con declare le digo a angular que tenga en cuenta que 
    //var jQuery y var $ se refieren  al ámbito global
    //declare var jQuery:any;
    //declare var $:any;
    function AppComponent() {
        this.title = "Ranking de jugadores...";
        this.jugadores = jugador_1.Jugador[]; // Un array de objetos jugador
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
        //Uso de Jquery
        //window['$'](".jugadores").css("transform","rotate(10deg)");
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
                //comentar para errores
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
        //solo puede colgar de una plantilla html
        templateUrl: './html/app.component.html',
        //puede tener varias hojas de estilos
        styleUrls: ['./css/app.component.css'],
        // ESto hay que ponerlo cuando tiemos de servicios para obtener los datos
        providers: [Jugador_service_1.JugadorService],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.componentB.js.map