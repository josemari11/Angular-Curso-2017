"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importamos la clase Component del paquete angular/core
var core_1 = require("@angular/core");
var Jugador = (function () {
    function Jugador() {
    }
    return Jugador;
}());
exports.Jugador = Jugador;
var JUGADORES = [
    { id: 1, name: "Avelina", presentacion: "Soy esquizo" },
    { id: 2, name: "Agustín", presentacion: "Soy psicopata" },
    { id: 3, name: "Paco", presentacion: "Soy tu padre" },
    { id: 4, name: "Ortensia", presentacion: "Soy el del quinto" },
    { id: 5, name: "María", presentacion: "Soy de tu pueblo" },
    { id: 6, name: "Lucía", presentacion: "Soy agustíno" },
    { id: 7, name: "Antxon", presentacion: "Soy de Vallecas" },
    { id: 8, name: "Paquita", presentacion: "Soy de la mar" },
    { id: 9, name: "Txema", presentacion: "Soy el del otro día" },
    { id: 10, name: "Guapi", presentacion: "Soy un nazi" },
    { id: 11, name: "Relleno", presentacion: "Soy perro flauta" },
];
// El siguiente código es para configurar la clase que hemos 
// importado
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores";
        this.name = 'mundo, qué originales estamos';
        this.jugadores = JUGADORES; //La asignación es por valor.
        this.player = {
            id: 1,
            name: "Braulio",
            presentacion: "Me presento, hale, adiós.",
            onSelect: function (player) {
                //esto es una forma de acceder a objetos que están en espacio de nombres global(o sea,
                //pertenecen al objeto windoe ,porque la línea anterio no funciona)
                window['habla'](player, presentacion);
            }
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>{{title}}</h1>\n\t<hr>\n\t<ul class=\"jugadores\">\n\t<!-- ngFor es un bucle para Angular-->\n\t<li *ngFor=\"let player of jugadores\" \n\t(click)=\"onSelect(jugador)\">\n\t\t<span class=\"bagde\">{{player.id}}</span>\n\t\t{{player.name}}\n\t</li>\n\t</ul>\n\t<hr>\n\t<h2>Hola, {{player.name}}</h2>\n    <div>Id:{{player.id}}</div>\n    <div><h2>Presentaci\u00F3n:{{player.presentacion}}</h2></div>\n    <div> <!--enlaza este input al modelo de datos del componente-->\n        <label>Nombre:</label>\n        <input class=\"form-control\" [(ngModel)] = \"player.name\" placeholder=\"...\"><br>\n\t\t <label>Presentaci\u00F3n:</label>\n\t\t<textarea class=\"form-control\" [(ngModel)] =\"player.presentacion\" placeholder=\"...\"></textarea>\n    </div>\n  ",
        styles: ["\n\t\t.selected{\n\t\t\n\t\t}\n\t\t.jugadores{\n\t\t\tlist-style:none;\n\t\t\tpadding:10px;\n\t\t}\n\t\t.jugadores li{\n\t\t\tbackground-color:#EEE;\n\t\t\theight:40px;\n\t\t\tline-height:40px;\n\t\t\tborder-bottom: 1px solid black;\n\t\t}\n\t\t.jugadores li:hover{\n\t\tbackground-color:white;\n\t\t}\n\t\t.jugadores li.selected:hover{\n\t\tbackground-color:white;\n\t\t}\n\t\t.jugadores .text{\n\t\t}\n\t\t.jugadores .bagde{\n\t\tborder-radius:0;\n\t\twidth:50px; \n\t\theight:40px;\n\t\tborder-bottom:1px solid #ccc;\n\t\tpadding:20px;\n\t\tbackground-color:#606;\n\t\tcolor:white;\n\t\t\n\t\t}\t\t\n\t\t\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map