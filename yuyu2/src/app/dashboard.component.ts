// IMPORTS
import { Component, OnInit  } from '@angular/core';
import { Jugador } from './jugador';
import { JugadorService } from './jugador.service';
import { Boca } from './boca';


// DECORATOR DEL COMPONENTE
@Component({
  selector: 'my-dashboard',
  templateUrl: './html/app.dashboard.html',
  styleUrls: ['./css/dashboard.component.css'],
  providers: [JugadorService],	
})


// DECLARACIÓN DE LA CLASE
export class DashboardComponent implements OnInit { 
	jugadores:Jugador[] = [];
	
	constructor(private jugadorService: JugadorService){
	}
	
	ngOnInit():void{
		this.jugadorService.getJugadores()
		.then(
			jugadores => this.jugadores = jugadores.slice(0,3)
		);
	}
}












