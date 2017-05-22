import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Jugador } from './jugador';
import { JugadorService } from './jugador.service';
import 'rxjs/add/operator/switchMap'; // EXPLICAR MÁS ADELANTE!!

@Component({
	selector: 'jugador-detalle',
	templateUrl: './html/jugador-detalle.component.html',
	styleUrls: ['./css/jugador-detalle.component.css']
})

export class JugadorDetalleComponent implements OnInit {
	@Input() jugador: Jugador;
	
	constructor(private jugadorService:JugadorService, private route: ActivatedRoute, private location: Location){}
	
	ngOnInit():void{
		this.route.params.switchMap( (params:Params) => this.jugadorService.getJugador(+params['id']))
		.subscribe(jugador => this.jugador = jugador);
	}
	
	patras():void {
		this.location.back();
	}
	
	guardar(): void{
        this.jugadorService.update(this.jugador)
            .then( () => this.patras);
        
        //////////////////////////////////////////////////
		/*var errores = "";
		
		var nombre = document.getElementById("ctrlNombre");
		var puntos = document.getElementById("ctrlPuntos");
		var estado = document.getElementById("ctrlEstado");
		var presentacion = document.getElementById("ctrlPresentacion");
		
		if(nombre['value'] == ""){
			errores = errores + "El nombre es obligatorio\n";
		}
		if(puntos['value'] == ""){
			errores = errores + "Debes introducir los puntos\n";
		}
		if(presentacion['value'] == ""){
			errores = errores + "No presrentarse es de mala educación\n";
		}
		
		if(errores != ""){
			alert(errores);
		}*/
	}
}







