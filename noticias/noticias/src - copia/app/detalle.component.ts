import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Noticia } from './noticia';
import { NoticiasService } from './noticias.service';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'noticia-detalle',
	templateUrl: './html/detalle.component.html',
	styleUrls: ['./css/detalle.component.css']
})

export class DetalleComponent implements OnInit {
	@Input() noticia: Noticia;
	
	constructor(private noticiasService:NoticiasService, private route: ActivatedRoute, private location: Location){}
	
	ngOnInit():void{
		this.route.params.switchMap( (params:Params) => this.noticiasService.getNoticia(+params['id']))
		.subscribe(noticia => this.noticia = noticia);
	}
	
	patras():void {
		this.location.back();
	}
	
	guardar(): void{
		this.noticiasService.update(this.noticia)
			.then( () => this.patras() );
	}
}







