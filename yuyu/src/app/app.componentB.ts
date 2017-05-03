// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';
import { Jugador } from './jugador';
import { Boca } from './boca';
import { JugadorService} from './Jugador.service';


//Decorador Ajusta varias propiedades de nuestro componente
@Component({
  selector: 'my-app',
    //solo puede colgar de una plantilla html
  templateUrl: './html/app.component.html',
    //puede tener varias hojas de estilos
  styleUrls: ['./css/app.component.css'],
  // ESto hay que ponerlo cuando tiemos de servicios para obtener los datos
    providers: [JugadorService],
})


export class AppComponent implements OnInit { 
	title = "Ranking de jugadores...";
	jugadores = Jugador[]; // Un array de objetos jugador
	selPlayer: Jugador; // el jugador seleccionado de la lista
	altavoz: Boca = new Boca();
    //Con declare le digo a angular que tenga en cuenta que 
    //var jQuery y var $ se refieren  al ámbito global
    //declare var jQuery:any;
    //declare var $:any;

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
        //Uso de Jquery
        //window['$'](".jugadores").css("transform","rotate(10deg)");
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
                //comentar para errores
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













