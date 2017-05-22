import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Noticia } from './noticia';
import { NoticiaService } from './noticia.service';
import 'rxjs/add/operator/switchMap'; // EXPLICAR MÁS ADELANTE!!

@Component({
	selector: 'noticia-detalle',
	templateUrl: '/html/detalle.component.html',
	styleUrls: ['/css/detalle.component.css']
})

export class NoticiaDetalleComponent implements OnInit {
	@Input() noticia: Noticia;
	
	constructor(private jugadorService:JugadorService, private route: ActivatedRoute, private location: Location){}
	
	ngOnInit():void{
		this.route.params.switchMap( (params:Params) => this.noticiaService.getNoticia(+params['id']))
		.subscribe(noticia => this.noticia = noticia);
	}
	
	patras():void {
		this.location.back();
	}
	
	guardar(): void{
        this.noticiaService.update(this.noticia)
            .then( () => this.patras);
        
      
	}
}







