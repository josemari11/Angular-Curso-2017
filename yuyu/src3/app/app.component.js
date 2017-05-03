"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importamos la clase Component del paquete angular/core
var core_1 = require("@angular/core");
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
// El siguiente código es para configurar la clase que hemos 
// importado
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores";
        this.berenjenas = "Wittgentstein vs Heidegger";
        this.name = 'mundo';
        this.jugadores = JUGADORES; // La asignación es por valor
    }
    /*player:Jugador={
        id: 1,
        name: "Braulio",
        presentacion: "Me presento, hale, adiós.",
    }*/
    AppComponent.prototype.onSelect = function (player) {
        this.selPlayer = player;
        //habla(player.presentacion);
        // Esto es un truco guarro para acceder a objetos que
        // están en el espacio de nombres global (o sea, que 
        // pertenecen al objeto window), porque la línea anterior
        // no funciona
        window['habla'](player.presentacion);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>{{title}}</h1>\n\t<hr>\n\t<ul class=\"jugadores\">\n\t\t<li *ngFor=\"let player of jugadores\" (click)=\"onSelect(player)\" >\n\t\t\t<span class=\"badge\">{{player.id}}</span> {{player.name}}\n\t\t</li>\n\t</ul>\n\t\n\t<hr>\n\t\n\t<jugador-detalle [jugador]=\"selPlayer\"></jugador-detalle>\n  ",
        styles: ["\n\t.selected{}\n\t.jugadores{\n\t\tlist-style-type:none;\n\t\tpadding:10px;\n\t}\n\t.jugadores li{\n\t\tbackground-color: #EEE;\n\t\theight: 40px; \n\t\tline-height: 40px;\n\t\tborder-bottom: 1px solid #DDD;\n\t}\n\t.jugadores li.selected:hover{\n\t\tbackground-color: #FC0;\n\t}\n\t.jugadores li:hover{\n\t\tbackground-color: #FC0;\n\t}\n\t.jugadores .text{}\n\t.jugadores .badge{\n\t\tborder-radius:0;\n\t\twidth:40px; height: 40px;\n\t\tline-height: 40px;\n\t\tborder-bottom: 1px solid #CCC;\n\t\tpadding:0;\n\t\tbackground-color: #666;\n\t}\n  "],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map