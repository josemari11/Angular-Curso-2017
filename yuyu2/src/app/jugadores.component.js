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
var router_1 = require("@angular/router");
var jugador_service_1 = require("./jugador.service");
var boca_1 = require("./boca");
var JugadoresComponent = (function () {
    // INYECTAR EL SERVICIO: Esto se hace en el CONSTRUCTOR de la 
    // clase. Se lo pasamos como propiedad privada
    function JugadoresComponent(jugadorService, router) {
        this.jugadorService = jugadorService;
        this.router = router;
        this.title = "Ranking de jugadores...";
        this.altavoz = new boca_1.Boca();
        console.log("Constructor");
    }
    JugadoresComponent.prototype.ngOnInit = function () {
        console.log("Componente inicializado");
        this.getJugadores();
    };
    JugadoresComponent.prototype.gotoDetalle = function () {
        this.router.navigate(['/detalle', this.selectedJugador.id]);
    };
    JugadoresComponent.prototype.getJugadores = function () {
        // Esto es para la versión síncrona...
        //this.jugadores = this.jugadorService.getJugadores();
        // Esto es para la versión asíncrona
        //this.jugadorService.getJugadores().then( jugadores => this.jugadores = jugadores );
        // Y esto es para la versión vieja de la versión 
        // asíncrona
        var th = this;
        this.jugadorService.getJugadores().then(function (yuyu) {
            th.jugadores = yuyu;
        });
    };
    JugadoresComponent.prototype.onSelect = function (player) {
        this.selectedJugador = player;
        this.altavoz.habla(player.presentacion);
    };
    JugadoresComponent.prototype.onDelete = function (player) {
        var x = confirm("¿Estás seguro de que deseas eliminar a este usuario?\nMira que aquí no valen los CTRL + Z");
        if (x == false)
            return;
        for (var indice in this.jugadores) {
            if (this.jugadores[indice].id == player.id) {
                this.jugadores.splice(parseInt(indice), 1);
                this.selectedJugador = null;
            }
        }
    };
    JugadoresComponent.prototype.borrar = function (jugador) {
        var _this = this;
        this.jugadorService.delete(jugadores.id)
            .then(function () {
            _this.jugadores = _this.jugadores.filter(function (x) { return  !== jugador; });
            if (_this.selectedJugador == jugador) {
                _this.selectedJugador = null;
            }
        });
    };
    JugadoresComponent.prototype.crear = function (nombre) {
        var _this = this;
        nombre = nombre.trim();
        if (nombre === "") {
            return;
        }
        this.jugadorService.crear(nombre)
            .then(function (jugador) {
            _this.jugadores.push(jugador);
            _this.selectedJugador = null;
        });
    };
    JugadoresComponent.prototype.newPlayer = function () {
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
    JugadoresComponent.prototype.log = function () {
        console.log(this.jugadores);
    };
    JugadoresComponent.prototype.guardar = function () {
        console.log("guardando...");
        var cadena = JSON.stringify(this.jugadores);
        localStorage.setItem("jugadores", cadena);
    };
    JugadoresComponent.prototype.cargar = function () {
        console.log("cargando...");
        var cadena = localStorage.getItem("jugadores");
        // Hemos recuperado los datos, pero están como una cadena
        // de texto, y tenemos que convertirlos a la estructura
        // original. Para eso usaremos el objeto JSON
        this.jugadores = JSON.parse(cadena);
        this.selectedJugador = null;
    };
    return JugadoresComponent;
}());
JugadoresComponent = __decorate([
    core_1.Component({
        selector: 'my-jugadores',
        templateUrl: './html/jugadores.component.html',
        styleUrls: ['./css/jugadores.component.css'],
        providers: [jugador_service_1.JugadorService],
    }),
    __metadata("design:paramtypes", [jugador_service_1.JugadorService, router_1.Router])
], JugadoresComponent);
exports.JugadoresComponent = JugadoresComponent;
//# sourceMappingURL=jugadores.component.js.map