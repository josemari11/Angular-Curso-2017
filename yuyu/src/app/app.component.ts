// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';


export class Jugador {
	id:number;
	name:string;
	presentacion:string;
}
const JUGADORES: Jugador[] =[
	{id:1,name:"Avelina",presentacion:"Soy esquizo"},
	{id:2,name:"Agustín",presentacion:"Soy psicopata"},
	{id:3,name:"Paco",presentacion:"Soy tu padre"},
	{id:4,name:"Ortensia",presentacion:"Soy el del quinto"},
	{id:5,name:"María",presentacion:"Soy de tu pueblo"},
	{id:6,name:"Lucía",presentacion:"Soy agustíno"},
	{id:7,name:"Antxon",presentacion:"Soy de Vallecas"},
	{id:8,name:"Paquita",presentacion:"Soy de la mar"},
	{id:9,name:"Txema",presentacion:"Soy el del otro día"},
	{id:10,name:"Guapi",presentacion:"Soy un nazi"},
	{id:11,name:"Relleno",presentacion:"Soy perro flauta"},
]

// El siguiente código es para configurar la clase que hemos 
// importado
@Component({
   selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<hr>
	<ul class="jugadores">
	<!-- ngFor es un bucle para Angular-->
	<li *ngFor="let player of jugadores" 
	(click)="onSelect(jugador)">
		<span class="bagde">{{player.id}}</span>
		{{player.name}}
	</li>
	</ul>
	<hr>
	<h2>Hola, {{player.name}}</h2>
    <div>Id:{{player.id}}</div>
    <div><h2>Presentación:{{player.presentacion}}</h2></div>
    <div> <!--enlaza este input al modelo de datos del componente-->
        <label>Nombre:</label>
        <input class="form-control" [(ngModel)] = "player.name" placeholder="..."><br>
		 <label>Presentación:</label>
		<textarea class="form-control" [(ngModel)] ="player.presentacion" placeholder="..."></textarea>
    </div>
  `,
  styles:[`
		.selected{
		
		}
		.jugadores{
			list-style:none;
			padding:10px;
		}
		.jugadores li{
			background-color:#EEE;
			height:40px;
			line-height:40px;
			border-bottom: 1px solid black;
		}
		.jugadores li:hover{
		background-color:white;
		}
		.jugadores li.selected:hover{
		background-color:white;
		}
		.jugadores .text{
		}
		.jugadores .bagde{
		border-radius:0;
		width:50px 
		height:40px;
		border-bottom:1px solid #ccc;
		padding:20px;
		background-color:#606;
		color:white;
		
		}		
		
  `]
})

export class AppComponent { 
	title = "Ranking de jugadores";
	name = 'mundo, qué originales estamos';
	jugadores=JUGADORES;//La asignación es por valor.
	player:Jugador={
		id: 1,
		name: "Braulio",
		presentacion: "Me presento, hale, adiós.",
		onSelect(player: Jugador):void{
		alert("por ahora,bien.")
		}
	}
	
}








