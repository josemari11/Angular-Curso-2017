import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Noticia } from './noticia';
import { Router } from '@angular/router';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'my-app',
  templateUrl: './html/noticias.component.html',
  styleUrls: ['./css/noticias.component.css'],
  providers: [NoticiasService],	
})
export class NoticiasComponent implements OnInit {
	name = 'ElMundoToday';
	noticias: Noticia[];
	selectedNoticia: Noticia;
	
	constructor(private noticiasService: NoticiasService, private router:Router){
		console.log("Constructor");
	}
	
	ngOnInit():void{
		console.log("Componente inicializado");
		this.getNoticias();
	}
	
	gotoDetalle():void{
		this.router.navigate(['/detalle', this.selectedNoticia.id]);
	}
	
	getNoticias():void{
		// Esto es para la versión asíncrona
		//this.noticiasService.getNoticias().then( noticias => this.noticias = noticias );
		
		// Y esto es para la versión vieja de la versión 
		// asíncrona
		var th:any = this;
		this.noticiasService.getNoticias().then(function(yuyu){
				th.noticias = yuyu;
			} 
		);
	}			
	onSelect(noticia: Noticia): void{
		this.selectedNoticia = noticia;
		// this.altavoz.habla(noticia.titulo);
	}
	
	borrar(noticia: Noticia): void {
		this.noticiasService.delete(noticia.id)
		.then(
			() => {
				this.noticias = this.noticias.filter( x => x !== noticia );
				if (this.selectedNoticia == noticia) {
					this.selectedNoticia = null;
				}
			}
		);
	}
	
	crear(titulo: string): void{
		titulo = titulo.trim();	// recorta los espacios en blanco
		if(titulo == "") { return; }
		this.noticiasService.crear(titulo)
			.then(
				noticia => {
					this.noticias.push(noticia);
					this.selectedNoticia = null;
				}
			);
	}
	


}
