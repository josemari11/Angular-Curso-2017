// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';
import { Jugador } from './jugador';
import { Boca } from './boca';


const JUGADORES: Jugador[] = [
	{id:1, estado: 1, puntos: 200000, name:"Avelina", presentacion:"Soy esquizo."},
	{id:2, estado: 2, puntos: 195000, name:"Severo", presentacion:"Limitado como un Borbón"},
	{id:3, estado: 3, puntos: 175000, name:"Placidia", presentacion:"Me pica..."},
	{id:4, estado: 4, puntos: 120000, name:"Arnulfo", presentacion:"Me maté en esa curva"},
	{id:5, estado: 3, puntos: 95000, name:"Braulia", presentacion:"Hola, hamijos"},
	{id:6, estado: 2, puntos: 75000, name:"Domicio", presentacion:"Tengo tres hipotecas"},
	{id:7, estado: 1, puntos: 50000, name:"Drusila", presentacion:"Me gusta el orfidal"},
	{id:8, estado: 2, puntos: 20000, name:"Adalberto", presentacion:"Yo antes molaba"},
	{id:9, estado: 3, puntos: 15000, name:"Gertrudis", presentacion:"Programo en Angular"},
	{id:10, estado: 4, puntos: 7500, name:"Filodoro", presentacion:"Pecador de la pradera"},
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
	
	constructor(){
		// Este método se ejecuta automáticamente cuando un
		// componente se instancia en la página. 
		console.log("Hola, amigos, acabo de nacer");
	}
	
	ngOnInit():void{
		// Este método se ejecuta después de constructor(),
		// cuando todas las clases del componente han terminado
		// de inicializarse
		console.log("Hola, amigos, he terminado de iniciarme");
	}
		
	onSelect(player: Jugador): void{
		this.selPlayer = player;
		this.altavoz.habla(player.presentacion);
	}
	
	onDelete(player: Jugador): void{
		var x = confirm("¿Estás seguro de que deseas eliminar a este usuario?\nMira que aquí no valen los CTRL + Z");
		if(x == false) return;
		
		for(var indice in this.jugadores){
			if(this.jugadores[indice].id == player.id){
				this.jugadores.splice(indice,1);
				this.selPlayer = null;
			}
		}
	}
	
	newPlayer(): void{
		// Voy a crear un nuevo id al azar. ÑAPACODE WARNING!!
		var idj:number = Number(Math.random() * 1000000000);
		
		// creo un objeto temporal con las props del nuevo jugador
		var obj = {
			id: idj,
			estado: 1,
			puntos: 0,
			name: "",
			presentacion: "",
		}
		// Añado este objeto al array de jugadores de esta clase
		this.jugadores.push(obj);
		// Ahora quiero que aparezca el formulario para editarlo
		// Lo hago invocando la función onSelect, pasándole el 
		// objeto que acabo de crear
		this.onSelect(obj);
	}
	
	log(): void{
		console.log(this.jugadores);
	}
	
	guardar(): void{
		console.log("guardando...");
		var cadena = JSON.stringify(this.jugadores);
		localStorage.setItem("jugadores", cadena);
	}
	
	cargar(): void{
		console.log("cargando...");
		var cadena = localStorage.getItem("jugadores");
		// Hemos recuperado los datos, pero están como una cadena
		// de texto, y tenemos que convertirlos a la estructura
		// original. Para eso usaremos el objeto JSON
		this.jugadores = JSON.parse(cadena);
		this.selPlayer = null;
	}
}













