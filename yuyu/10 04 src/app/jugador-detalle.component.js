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
var core_1 = require("@angular/core");
// Tengo que importar la definición de la clase Jugador, porque
// voy a trabajar con ella
var jugador_1 = require("./jugador");
var JugadorDetalleComponent = (function () {
    function JugadorDetalleComponent() {
    }
    return JugadorDetalleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", jugador_1.Jugador)
], JugadorDetalleComponent.prototype, "jugador", void 0);
JugadorDetalleComponent = __decorate([
    core_1.Component({
        selector: 'jugador-detalle',
        template: "\n\t\t<div *ngIf=\"jugador\">\n\t\t\t<h2>Propiedades de {{jugador.name}}</h2>\n\t\t\t<div>\n\t\t\t\t<label>Id: </label>{{jugador.id}}\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Nombre: </label>\n\t\t\t\t<input [(ngModel)]=\"jugador.name\" />\n\t\t\t</div>\n            <div class=\"cajas\">\n            <label>Presentaci\u00F3n: </label>\n                <input [(ngModel)]=\"jugador.presentacion\" />\n            </div>\n            <div class=\"cajas\">\n            <label>Puntos: </label>\n                <input [(ngModel)]=\"jugador.puntos\" />\n\t\t      </div>\n            <label>Estado</label>\n            <select  [(ngModel)]=\"jugador.estado\"/>\n            <option value=\"1\">Pendiente de activaci\u00F3n</option>\n            <option value=\"2\">Activado</option>\n            <option value=\"3\">Suspendido</option>\n            <option value=\"4\">Dado de baja</option>\n            </select>\n        </div>\n\t"
    })
], JugadorDetalleComponent);
exports.JugadorDetalleComponent = JugadorDetalleComponent;
//# sourceMappingURL=jugador-detalle.component.js.map