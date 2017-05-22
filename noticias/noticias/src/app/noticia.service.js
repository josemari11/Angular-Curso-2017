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
var noticia_1 = require("/noticia");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var NoticiaService = (function () {
    function NoticiaService(http) {
        this.http = http;
        // propiedades privadas
        this.NoticiasUrl = 'api/noticias'; // URL a la api web
        this.cabeceras = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    NoticiaService.prototype.getNoticias = function () {
        return this.http.get(this.noticiasUrl)
            .toPromise()
            .then(function (datos) { return datos.json().data; })
            .catch(this.queHaPasado);
    };
    NoticiaService.prototype.getNoticias = function (id) {
        var URL = "$(this.noticiasUrl)/$(id)";
        return this.http.get(URL)
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    NoticiaService.prototype.queHaPasado = function (error) {
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    };
    NoticiaService.prototype.update = function (noticia) {
        var URL = this.NoticiasUrl + "/" + noticia.id;
        return this.http
            .put(URL, JSON.stringify(noticia_1.Noticia), { headers: this.cabeceras })
            .toPromise()
            .then(function () { return noticia; })
            .catch(this.queHaPasado);
    };
    NoticiaService.prototype.crear = function (nombre) {
        return this.http
            .post(this.noticiasUrl, JSON.stringify(noticia), { headers: this.cabeceras })
            .toPromise()
            .then(function (respuesta) { return respuesta.json().data; })
            .catch(this.queHaPasado);
    };
    return NoticiaService;
}());
NoticiaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoticiaService);
exports.NoticiaService = NoticiaService;
//# sourceMappingURL=noticia.service.js.map