// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Jugador } from './jugador';
import { JugadorService } from './jugador.service';
import { Boca } from './boca';


@Component({
  selector: 'my-app',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css'],
  // Esto hay que ponerlo cuando tiramos de servicios para 
  // obtener los datos
  providers: [JugadorService],	
})


export class AppComponent implements OnInit { 
	title = "Ranking de jugadores...";
	jugadores: Jugador[]; 	// un array de objetos Jugador
	selPlayer: Jugador;		// el jugador seleccionado de la lista
	altavoz: Boca = new Boca();
	
	
	// INYECTAR EL SERVICIO: Esto se hace en el CONSTRUCTOR de la 
	// clase. Se lo pasamos como propiedad privada
	constructor(private jugadorService: JugadorService){
		console.log("Constructor");
	}
	
	ngOnInit():void{
		console.log("Componente inicializado");
		this.getJugadores();
	}
	
	getJugadores():void{
		this.jugadores = this.jugadorService.getJugadores();
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













