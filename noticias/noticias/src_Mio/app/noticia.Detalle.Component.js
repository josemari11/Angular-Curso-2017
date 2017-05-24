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
var common_1 = require("@angular/common");
var noticia_1 = require("./noticia");
var noticia_service_1 = require("./noticia.service");
require("rxjs/add/operator/switchMap");
var NoticiaDetalleComponent = (function () {
    function NoticiaDetalleComponent(noticiaService, route, location) {
        this.noticiaService = noticiaService;
        this.route = route;
        this.location = location;
    }
    NoticiaDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.noticiaService.getNoticias(+params['id']); })
            .subscribe(function (noticia) { return _this.noticia = noticia; });
    };
    NoticiaDetalleComponent.prototype.patras = function () {
        this.location.back();
    };
    NoticiaDetalleComponent.prototype.guardar = function () {
        var _this = this;
        this.noticiaService.update(this.noticia)
            .then(function () { return _this.patras; });
    };
    return NoticiaDetalleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", noticia_1.Noticia)
], NoticiaDetalleComponent.prototype, "noticia", void 0);
NoticiaDetalleComponent = __decorate([
    core_1.Component({
        selector: 'noticia-detalle',
        templateUrl: '/html/detalle.component.html',
        styleUrls: ['/css/detalle.component.css']
    }),
    __metadata("design:paramtypes", [noticia_service_1.NoticiaService, router_1.ActivatedRoute, common_1.Location])
], NoticiaDetalleComponent);
exports.NoticiaDetalleComponent = NoticiaDetalleComponent;
//# sourceMappingURL=noticia.Detalle.Component.js.map