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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si más tarde hay que añadirle dependencias
var NoticiasService = (function () {
    function NoticiasService(http) {
        this.http = http;
        // propiedades privadas
        //private noticiasUrl = 'api/noticias'; // URL a la api 
        this.noticiasUrl = 'api/noticias'; // URL a la api 
        this.cabeceras = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    NoticiasService.prototype.getNoticias = function () {
        return this.http.get(this.noticiasUrl)
            .toPromise()
            .then(function (datos) { return datos.json().data; })
            .catch(this.queHaPasado);
    };
    NoticiasService.prototype.getNoticia = function (id) {
        var url = this.noticiasUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    NoticiasService.prototype.queHaPasado = function (error) {
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    };
    NoticiasService.prototype.update = function (noticia) {
        var URL = this.noticiasUrl + "/" + noticia.id;
        return this.http.put(URL, JSON.stringify(noticia), { headers: this.cabeceras })
            .toPromise()
            .then(function () { return noticia; })
            .catch(this.queHaPasado);
    };
    NoticiasService.prototype.crear = function (nombre) {
        return this.http.post(this.noticiasUrl, JSON.stringify({ name: nombre, estado: 3 }), { headers: this.cabeceras })
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    NoticiasService.prototype.delete = function (id) {
        var URL = this.noticiasUrl + "/" + id;
        return this.http.delete(URL, { headers: this.cabeceras })
            .toPromise()
            .then(function () { return null; })
            .catch(this.queHaPasado);
    };
    return NoticiasService;
}());
NoticiasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoticiasService);
exports.NoticiasService = NoticiasService;
//# sourceMappingURL=noticias.service.js.map