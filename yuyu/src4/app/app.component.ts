// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';

import { Jugador } from './jugador';

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

// El siguiente código es para configurar la clase que hemos 
// importado
@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<hr>
	<ul class="jugadores">
		<li *ngFor="let player of jugadores" (click)="onSelect(player)" >
			<span class="badge">{{player.id}}</span> {{player.name}}
		</li>
	</ul>
	
	<hr>
	
	<jugador-detalle [jugador]="selPlayer"></jugador-detalle>
  `,
  styles: ['app.component.css'],
})

export class AppComponent { 
	title = "Ranking de jugadores";
	berenjenas = "Wittgentstein vs Heidegger";
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








