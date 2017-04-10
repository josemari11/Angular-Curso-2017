// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';

import { Jugador } from './jugador';

const JUGADORES: Jugador[] = [

	{id:1, name:"Avelina", presentacion:"Soy esquizo.",puntos:1000},
	{id:2, name:"Severo", presentacion:"Limitado como un Borbón",puntos:1000},
	{id:3, name:"Placidia", presentacion:"Me pica...",puntos:1000},
	{id:4, name:"Arnulfo", presentacion:"Me maté en esa curva",puntos:1000},
	{id:5, name:"Braulia", presentacion:"Hola, hamijos",puntos:1000},
	{id:6, name:"Domicio", presentacion:"Tengo tres hipotecas",puntos:1000},
	{id:7, name:"Drusila", presentacion:"Me gusta el orfidal",puntos:1000},
	{id:8, name:"Adalberto", presentacion:"Yo antes molaba",puntos:1000},
	{id:9, name:"Gertrudis", presentacion:"Programo en Angular",puntos:1000},
	{id:10, name:"Filodoro", presentacion:"Pecador de la pradera",puntos:1000},
];

// El siguiente código es para configurar la clase que hemos 
// importado
@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<hr>
	<ul class="jugadores">
		<li *ngFor="let player of jugadores" (click)="onSelect(player)" >
			<span class="badge">{{player.id}}</span> {{player.name}} <label>   Presentación   </label>{{player.presentacion}} <label>   Puntos  </label>{{player.puntos}}
		</li>
	
	</ul>
	
	<hr>
	
	<jugador-detalle [jugador]="selPlayer"></jugador-detalle>
  `,
  styles: [`
	.selected{}
	.jugadores{
		list-style-type:none;
		padding:10px;
	}
	.jugadores li{
		background-color: #EEE;
		height: 40px; 
		line-height: 40px;
		border-bottom: 1px solid #DDD;
	}
	.jugadores li.selected:hover{
		background-color: #FC0;
	}
	.jugadores li:hover{
		background-color: #FC0;
	}
	.jugadores .text{}
	.jugadores .badge{
		border-radius:0;
		width:40px; height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #CCC;
		padding:0;
		background-color: #666;
	}
  `],
})

export class AppComponent { 
	title = "Ranking de jugadores";
	name = 'mundo';
	jugadores = JUGADORES;	// La asignación es por valor
	
	selPlayer: Jugador;		// el jugador seleccionado de la lista
	
	/*player:Jugador={
		id: 1,
		name: "Braulio",
		presentacion: "Me presento, hale, adiós.",
	}*/
	
	onSelect(player: Jugador): void{
		this.selPlayer = player;
		//habla(player.presentacion);
		// Esto es un truco guarro para acceder a objetos que
		// están en el espacio de nombres global (o sea, que 
		// pertenecen al objeto window), porque la línea anterior
		// no funciona
		window['habla'](player.presentacion);
	}
}








