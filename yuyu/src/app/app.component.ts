// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';

export class Jugador {
	id:number;
	name:string;
	presentacion:string;
}

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
	<h2>Hola, {{player.name}}</h2>
	<div>Id: {{player.id}}</div>
	<div>
		<label>Nombre:</label>
		<input [(ngModel)] = "player.name" placeholder="..." class="form-control">
	</div>
	<div>
		<label>Presentación:</label>
		<textarea [(ngModel)] = "player.presentacion" class="form-control"></textarea>
	</div>
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
	player:Jugador={
		id: 1,
		name: "Braulio",
		presentacion: "Me presento, hale, adiós.",
	}
	onSelect(player: Jugador): void{
		//habla(player.presentacion);
		//esto es una forma de acceder a objetos que están en espacio de nombres global(o sea,
		//pertenecen al objeto windoe ,porque la línea anterio no funciona)
		window['habla'](player.presentacion);
	}
}








