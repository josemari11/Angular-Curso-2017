import { Component } from '@angular/core';
import { Boca } from './boca';

@Component({
	selector: 'reloj-analogico',
	templateUrl: './html/app.analogico.html',
	styleUrls: ['./css/app.analogico.css'],
})

export class AppAnalogico {
	crono: any;
	texto: string = "";
	ctx: any;
	radius: number = 0;
	altavoz: Boca = new Boca();
	hora: string = "";
	
	constructor(){
		this.crono = setInterval(() => {this.dibujaReloj();}, 1000);
	}
	
	ngOnInit():void{
		// Hacemos referencia al <canvas> del componente
		var c = document.getElementById("fistro");
		// Nos ponemos en modo de dibujo 2D
		this.ctx = c.getContext("2d");		
		this.radius = c.height / 2;
		this.ctx.translate(this.radius, this.radius);
		this.radius = this.radius * 0.90;
		this.dibujaReloj();
	}
	
	dibujaReloj():void{
		var grad;

		this.ctx.beginPath();
		this.ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();

		grad = this.ctx.createRadialGradient(0,0,this.radius*0.95, 0,0,this.radius*1.05);
		grad.addColorStop(0, '#333');
		grad.addColorStop(0.5, 'white');
		grad.addColorStop(1, '#333');
		this.ctx.strokeStyle = grad;
		this.ctx.lineWidth = this.radius*0.1;
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(0, 0, this.radius*0.1, 0, 2*Math.PI);
		this.ctx.fillStyle = '#333';
		this.ctx.fill();
		this.dibujaNumeros(this.ctx, this.radius);
	}
	
	dibujaNumeros(ctx, radius):void{
		var ang;
		var num;
		ctx.font = radius*0.15 + "px arial";
		ctx.textBaseline="middle";
		ctx.textAlign="center";
		for(num= 1; num < 13; num++){
			ang = num * Math.PI / 6;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.85);
			ctx.rotate(-ang);
			ctx.fillText(num.toString(), 0, 0);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.85);
			ctx.rotate(-ang);
		}
		this.dibujaHora(ctx, radius);
	}
	
	dibujaHora(ctx, radius): void{
		var fecha = new Date();
		var hour = fecha.getHours();
		var minute = fecha.getMinutes();
		var second = fecha.getSeconds();
		this.hora = hour + ":" + minute;
		//hour
		hour=hour%12;
		hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
		this.drawHand(ctx, hour, radius*0.5, radius*0.07);
		//minute
		minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
		this.drawHand(ctx, minute, radius*0.8, radius*0.07);
		// second
		second=(second*Math.PI/30);
		this.drawHand(ctx, second, radius*0.9, radius*0.02);
	}
	
	drawHand(ctx, pos, length, width): void {
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = "round";
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0, -length);
		ctx.stroke();
		ctx.rotate(-pos);
	}
	
	di(): void{
		this.altavoz.habla("Son las " + this.hora);
	}
}





