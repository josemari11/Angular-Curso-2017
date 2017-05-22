import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si más tarde hay que añadirle dependencias
@Injectable()

export class JugadorService{
	// propiedades privadas
	private jugadoresUrl = 'api/jugadores'; // URL a la api web
	
	constructor(private http: Http)	{}
	
	getJugadores(): Promise<Jugador[]>{
		return this.http.get(this.jugadoresUrl)
			.toPromise()
			.then(datos => datos.json().data as Jugador[])
			.catch(this.queHaPasado);			
		
		/*
		// Esto lo dejop a título comparativo, para ver cómo se 
		// hace en jquery algo SIMILAR a las promesas en ES6
		$.ajax({
			url:this.jugadoresUrl,
			dataType:"json",
			success: function(datos){
				return datos;
			},
			error: funcion(queHaPasado){
				console.log(queHaPasado);
			}
		})
		*/
	}
	
	getJugador(id: number): Promise<Jugador> {
		// En js tradicional de toda la vida
		//var url = this.jugadoresUrl + "/" + id;
		// En ES6, con templates de cadena
		const url = `${this.jugadoresUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(respuesta => respuesta.json().data as Jugador)
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
	
	update(jugador: Jugador): Promise<Jugador> {
		const URL = `${this.jugadoresUrl}/${jugador.id}`;
		return this.http.put(
				URL, 
				JSON.stringify(jugador),
				{headers: this.cabeceras}
			)
			.toPromise()
			.then( () => jugador )
			.catch(this.queHaPasado);
	}
	
	crear(nombre: string): Promise<Jugador> {
		return this.http.post(
				this.jugadoresUrl,
				JSON.stringify({name: nombre, estado: 3}),
				{headers: this.cabeceras}
			)
			.toPromise()
			.then(respuesta => respuesta.json().data as Jugador)
			.catch(this.queHaPasado);
	}
	
	delete(id: number): Promise<Jugador> {
		const URL = `${this.jugadoresUrl}/${id}`;
		return this.http.delete(
			URL,
			{headers: this.cabeceras}
		)
		.toPromise()
		.then( () => null )
		.catch(this.queHaPasado);
	}
	
}










