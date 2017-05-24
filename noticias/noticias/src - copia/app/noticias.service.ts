import { Injectable } from '@angular/core';
import { Noticia } from './noticia';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si más tarde hay que añadirle dependencias
@Injectable()

export class NoticiasService{
	// propiedades privadas
	//private noticiasUrl = 'api/noticias'; // URL a la api 
	private noticiasUrl = 'api/noticias'; // URL a la api 
	
	constructor(private http: Http)	{}
	
	getNoticias(): Promise<Noticia[]>{
		return this.http.get(this.noticiasUrl)
			.toPromise()
			.then(datos => datos.json().data as Noticia[])
			.catch(this.queHaPasado);			
		
	}
	
	getNoticia(id: number): Promise<Noticia> {
		const url = `${this.noticiasUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(respuesta => respuesta.json().data as Noticia)
			.catch(this.queHaPasado);
	}
	
	queHaPasado(error: any): Promise<any> {
		console.log("Ha ocurrido el siguiente error: ", error);
		return Promise.reject(error.message || error);
	}
	
	private cabeceras = new Headers(
		{
		'Content-Type': 'application/json'
		}
	);
	
	update(noticia: Noticia): Promise<Noticia> {
		const URL = `${this.noticiasUrl}/${noticia.id}`;
		return this.http.put(
				URL, 
				JSON.stringify(noticia),
				{headers: this.cabeceras}
			)
			.toPromise()
			.then( () => noticia )
			.catch(this.queHaPasado);
	}
	
	crear(nombre: string): Promise<Noticia> {
		return this.http.post(
				this.noticiasUrl,
				JSON.stringify({name: nombre, estado: 3}),
				{headers: this.cabeceras}
			)
			.toPromise()
			.then(respuesta => respuesta.json().data as Noticia)
			.catch(this.queHaPasado);
	}
	
	delete(id: number): Promise<Noticia> {
		const URL = `${this.noticiasUrl}/${id}`;
		return this.http.delete(
			URL,
			{headers: this.cabeceras}
		)
		.toPromise()
		.then( () => null )
		.catch(this.queHaPasado);
	}
	
}










