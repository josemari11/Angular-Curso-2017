// LOS IMPORTS
import { Component } from '@angular/core';
import { JugadoresComponent }  from './jugadores.component';

// DECORATOR
@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/dashboard" class="boton-menu">Podio</a>
		<a routerLink="/jugadores" class="boton-menu">Lista</a>
		<hr>
		<router-outlet></router-outlet>
		<footer>
		© 2017 Ceinpro.es
		</footer>
	`
})

// EXPORTACIÓN DE LA CLASE
export class AppComponent {
	title = "Gestión de jugadores";
}




