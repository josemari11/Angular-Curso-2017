// LOS IMPORTS
import { Component } from '@angular/core';
import { NoticiasComponent }  from './noticias.component';

// DECORATOR
@Component({
	selector: 'my-app',
	templateUrl: './html/app.component.html',
	styleUrls: ['./css/app.component.css'],
})

// EXPORTACIÓN DE LA CLASE
export class AppComponent {
	title = "Gestión de noticias";
}




