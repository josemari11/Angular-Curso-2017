import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { JUGADORES } from './mock-jugadores';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'


// Esto hay que ponerlo por narices. Le dice a angular que emita metadatos para el servicio, por si más tarde hay que añadirle dependencias
@Injectable()

// Este servicio podría obtener los datos de cualquier sitio: servicios web, localStorage, o un archivo de datos mockeados, p.ej
export class JugadorService{
    //propiedades privadas
    private jugadoresUrl = 'api/jugadores';

    constructor(private http:Http){
        
    }
	
	getJugadores(): Promise<Jugador[]>{
		//return Promise.resolve(JUGADORES);
		return this.http.get(this.jugadoresUrl)
        .toPromise()
        .then(datos => datos.json().data as jugador[])
        .catch(this.queHaPasado);
	}
	
	getJugador(id: number): Promise<Jugador> {
		return this.getJugadores()
			.then(jugadores => jugadores.find( jugador => jugador.id == id ));
	}

    queHaPasado(error:any):Promise<any>{
        console.log("Ha ocurrido el siguiente error: ", error);
        return Promise.reject(error.message || error);
    }

}










