import { Component } from '@angular/core';

@Component({
	selector: 'reloj-analogico',
	templateUrl: './html/app.analogico.html',
	styleUrls: ['./css/app.analogico.css'],
})

export class AppAnalogico {
	crono: any;
	texto: string = "";
	
	constructor(){
		this.crono = setInterval(() => {this.actualiza();}, 1000);
	}
	
	actualiza():void{
		var fecha = new Date();
		var horas = fecha.getHours();
		var minutos = fecha.getMinutes();
		var segundos = fecha.getSeconds();
		
		// Diferentes modos de referenciar un elemento html desde javascript
		//document.getElementById("fistro").innerHTML = "aaa";
		//document.querySelector(".reloj-analogico").innerHTML = "aaa";
		//document.querySelector("#fistro").innerHTML = "aaa";
		
		// Hacemos referencia al <canvas> del componente
		var c = document.getElementById("fistro");
		// Nos ponemos en modo de dibujo 2D
		var ctx = c.getContext("2d");
		// trazamos el círculo externo
		ctx.beginPath();
		ctx.arc(125,125,100,0,2*Math.PI);
		ctx.stroke();
		// Trazamos una línea
		ctx.moveTo(125, 125);
		ctx.lineTo(125, 50);
		ctx.stroke();
		
		//Linea Horas
        ctx.moveTo(125,125);
        ctx.lineTo(125,50);
        ctx.stroke();
        //LinÃ©a minutos
		
        ctx.moveTo(125,125);
        ctx.lineTo(135,45);
        ctx.stroke();
        //LinÃ©a segundos
        ctx.moveTo(125,125);
        ctx.lineTo(145,40);
        ctx.stroke();

		
	}
	
	
}





