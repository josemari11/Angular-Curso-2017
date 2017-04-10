// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';
import { Jugador } from './jugador';
import { Boca } from './boca';


const JUGADORES: Jugador[] = [
	{id:1, name:"Avelina", presentacion:"Soy esquizo."},
	{id:2, name:"Severo", presentacion:"Limitado como un Borbón"},
	{id:3, name:"Placidia", presentacion:"Me pica..."},
	{id:4, name:"Arnulfo", presentacion:"Me maté en esa curva"},
	{id:5, name:"Braulia", presentacion:"Hola, hamijos"},
	{id:6, name:"Domicio", presentacion:"Tengo tres hipotecas"},
	{id:7, name:"Drusila", presentacion:"Me gusta el orfidal"},
	{id:8, name:"Adalberto", presentacion:"Yo antes molaba"},
	{id:9, name:"Gertrudis", presentacion:"Programo en Angular"},
	{id:10, name:"Filodoro", presentacion:"Pecador de la pradera"},
];


@Component({
  selector: 'my-app',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css'],
})


export class AppComponent { 
	title = "Ranking de jugadores...";
	jugadores = JUGADORES;
	selPlayer: Jugador;		// el jugador seleccionado de la lista
	altavoz: Boca = new Boca();
	
	onSelect(player: Jugador): void{
		// Cuando trabajemos con eventos, ten en cuenta que 
		// TypeScript entiende que lo que hay aquí dentro 
		// pertenece al objeto que ha originado el evento, no a 
		// la clase AppComponent. Para acceder a otros miembros
		// de dicha clase tenemos que usar "this."
		this.selPlayer = player;
		this.altavoz.habla(player.presentacion);
	}
}








