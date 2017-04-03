// Importamos la clase Component del paquete angular/core
import { Component } from '@angular/core';



// El siguiente código es para configurar la clase que hemos 
// importado
@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<h2>Hola, {{player.name}}</h2>
	<p>Prueba de concepto, esto va a cambiar mucho...</p>
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

export class Jugador {
	id:number;
	name:string;
	presentacion:string;
}






