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
var router_1 = require("@angular/router");
var noticias_service_1 = require("./noticias.service");
var NoticiasComponent = (function () {
    function NoticiasComponent(noticiasService, router) {
        this.noticiasService = noticiasService;
        this.router = router;
        this.name = 'ElMundoToday';
        console.log("Constructor");
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        console.log("Componente inicializado");
        this.getNoticias();
    };
    NoticiasComponent.prototype.gotoDetalle = function () {
        this.router.navigate(['/detalle', this.selectedNoticia.id]);
    };
    NoticiasComponent.prototype.getNoticias = function () {
        // Esto es para la versi�n as�ncrona
        //this.noticiasService.getNoticias().then( noticias => this.noticias = noticias );
        // Y esto es para la versi�n vieja de la versi�n 
        // as�ncrona
        var th = this;
        this.noticiasService.getNoticias().then(function (yuyu) {
            th.noticias = yuyu;
        });
    };
    NoticiasComponent.prototype.onSelect = function (noticia) {
        this.selectedNoticia = noticia;
        // this.altavoz.habla(noticia.titulo);
    };
    NoticiasComponent.prototype.borrar = function (noticia) {
        var _this = this;
        this.noticiasService.delete(noticia.id)
            .then(function () {
            _this.noticias = _this.noticias.filter(function (x) { return x !== noticia; });
            if (_this.selectedNoticia == noticia) {
                _this.selectedNoticia = null;
            }
        });
    };
    NoticiasComponent.prototype.crear = function (titulo) {
        var _this = this;
        titulo = titulo.trim(); // recorta los espacios en blanco
        if (titulo == "") {
            return;
        }
        this.noticiasService.crear(titulo)
            .then(function (noticia) {
            _this.noticias.push(noticia);
            _this.selectedNoticia = null;
        });
    };
    return NoticiasComponent;
}());
NoticiasComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './html/noticias.component.html',
        styleUrls: ['./css/noticias.component.css'],
        providers: [noticias_service_1.NoticiasService],
    }),
    __metadata("design:paramtypes", [noticias_service_1.NoticiasService, router_1.Router])
], NoticiasComponent);
exports.NoticiasComponent = NoticiasComponent;
//# sourceMappingURL=noticias.component.js.map