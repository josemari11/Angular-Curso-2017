import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { JUGADORES } from './mock-jugadores';

//Esto hay que ponerlo por narices. Le dice a angular que emita 
//metadatos para el servicio. por si más tarde hay que añadirle dependencias
//al igual que @components hay que añadirlo, aunque este vacio
@Injectable()

// Este servicio podría obtener los datos de cualquier sitiio:
//servicios web, localStorage, o un archivo de datos mockeados, p.el;
export class JugadorService{
    // Esta clase tiene un método  llamado getjugadores que devuelve 
    // un array de objetos de tipo Jugadores
    getJugadores(): Jugador[]{
    return JUGADORES;
    }
}