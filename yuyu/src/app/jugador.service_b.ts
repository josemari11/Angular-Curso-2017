import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { JUGADORES } from './mock-jugadores';

// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si más tarde hay que añadirle dependencias
@Injectable()

// Este servicio podría obtener los datos de cualquier sitio: servicios web, localStorage, o un archivo de datos mockeados, p.ej
export class JugadorService{
	// Esta clase tiene un método llado getJugadores que devuelve
	// un array de objetos de tipo Jugador
	getJugadores(): Jugador[] {
		return JUGADORES;
	}
}





