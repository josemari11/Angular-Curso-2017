import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { JUGADORES } from './mock-jugadores';

// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si m�s tarde hay que a�adirle dependencias
@Injectable()

// Este servicio podr�a obtener los datos de cualquier sitio: servicios web, localStorage, o un archivo de datos mockeados, p.ej
export class JugadorService{
	// Esta clase tiene un m�todo llado getJugadores que devuelve
	// un array de objetos de tipo Jugador
	/*getJugadores(): Jugador[] {
		// Versi�n s�ncrona: bloquea la interfaz hasta que se
		// hayan inyectado los jugadores
		return JUGADORES;
	}*/
	
	// Versi�n de la anterior, usando promises. Esta es una 
	// versi�n as�ncrona
	getJugadores(): Promise<Jugador[]>{
		return Promise.resolve(JUGADORES);
	}
	
	getJugador(id: number): Promise<Jugador> {
		return this.getJugadores().then(
			jugadores => jugadores.find( jugador => jugador.id == id );
		)
	}
}










