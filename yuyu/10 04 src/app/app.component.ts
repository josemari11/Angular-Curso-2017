// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';
import { Jugador } from './jugador';
import { Boca } from './boca';


const JUGADORES: Jugador[] = [
	{id:1, puntos:200000, name:"Avelina", presentacion:"Soy esquizo.",estado:1},
	{id:2, puntos:200000, name:"Severo", presentacion:"Limitado como un Borbón",estado:1},
	{id:3, puntos:200000, name:"Placidia", presentacion:"Me pica...",estado:1},
	{id:4, puntos:200000, name:"Arnulfo", presentacion:"Me maté en esa curva",estado:1},
	{id:5, puntos:200000, name:"Braulia", presentacion:"Hola, hamijos",estado:1},
	{id:6, puntos:200000, name:"Domicio", presentacion:"Tengo tres hipotecas",estado:1},
	{id:7, puntos:200000, name:"Drusila", presentacion:"Me gusta el orfidal",estado:1},
	{id:8, puntos:200000, name:"Adalberto", presentacion:"Yo antes molaba",estado:1,},
	{id:9, puntos:200000, name:"Gertrudis", presentacion:"Programo en Angular",estado:1},
	{id:10, puntos:200000, name:"Filodoro", presentacion:"Pecador de la pradera",estado:1},
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
newPlayer ():void{
    // Crear un nuevo id al azar
    var idj = parseInt(Math.random() * 10000000);
    var obj{
            id:idj,
            estado:1,
            puntos:0,
            nombre:"",
            presentacion:"",
    }
    // Añado este array de jugadores al array de jugadores de esta clase
        this.jugadores.push(obj);
    // Ahora quiero que aparezca el formulario para editarlo
    //Lo hago invocando la función onSelect,pasándole el objeto que acabo de crear
        this.onSelect()obj;
        
    log():void{
        this.log(this.jugadores);
    }    
        
}
}








