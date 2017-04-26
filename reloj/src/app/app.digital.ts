import { Component } from '@angular/core';

@Component({
	selector: 'reloj-digital',
	templateUrl: './html/app.digital.html',
	styleUrls: ['./css/app.digital.css'],
})

export class AppDigital{
	crono: any;
	texto: string = "";
	
	constructor(){
		this.crono = setInterval(() => {this.actualiza();}, 1000);
		//this.crono = setInterval(this.actualiza, 1000);
	}
	
	actualiza():void{
		var fecha = new Date();
		this.texto = fecha.toLocaleTimeString();
	}
}

/*
ÁREAS DE MEJORA PARA EL RELOJ DIGITAL
=======================================
			- solucionar lo de los 0 que faltan cuando el nº está por debajo de 10

*/




