// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';


export class Jugador {
	id:number;
	name:string;
	presentacion:string;
}

// El siguiente código es para configurar la clase que hemos 
// importado
@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<h2>Hola, {{player.name}}</h2>
    <div>Id:{{player.id}}</div>
    <div>Id:{{player.presentacion}}</div>
    <div>// enlaza este input al modelo de datos del componente
        <label>Nombre:</label>
        <input [(ngModel)] = "player.name" placeholder="...">
    </div>
    
  `,
})

export class AppComponent { 
	title = "Ranking de jugadores";
	name = 'mundo, qué originales estamos';
	player:Jugador={
		id: 1,
		name: "Braulio",
		presentacion: "Me presento, hale, adiós."
	}
}







