import { Component, Input } from '@angular/core';
import { Jugador } from './jugador';

@Component({
	selector: 'jugador-detalle',
	templateUrl: './html/jugador-detalle.component.html',
	styleUrls: ['./css/jugador-detalle.component.css']
})

export class JugadorDetalleComponent {
	// Le decimos a angular que jugador es una propiedad de tipo
	// Jugador, y que se gestiona como un input
	@Input() jugador: Jugador;
	
	guardar(): void{
		// Tendremos que hacer una validación de los campos 
		// del formulario antes de actualizar el modelo de datos
		var errores = "";
		
		// Referencias a elementos de la página
		var nombre = document.getElementById("ctrlNombre");
		var puntos = document.getElementById("ctrlPuntos");
		var estado = document.getElementById("ctrlEstado");
		var presentacion = document.getElementById("ctrlPresentacion");
		
		// Empezamos con las validaciones
		if(nombre.value == ""){
			errores = errores + "El nombre es obligatorio\n";
		}
		if(puntos.value == ""){
			errores = errores + "Debes introducir los puntos\n";
		}
		if(presentacion.value == ""){
			errores = errores + "No presrentarse es de mala educación\n";
		}
		
		// Llegados a este punto, si errores sigue vacío, es porque
		// no hemos tenido errores de validación. Si no, es que 
		// ha habido algún error
		if(errores != ""){
			alert(errores);
		}
	}
}







