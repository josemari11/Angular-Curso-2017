import { Component, Input } from '@angular/core';
// Tengo que importar la definición de la clase Jugador, porque
// voy a trabajar con ella
import { Jugador } from './jugador';

@Component({
	selector: 'jugador-detalle',
	template: `
		<div *ngIf="jugador">
			<h2>Propiedades de {{jugador.name}}</h2>
			<div>
				<label>Id: </label>{{jugador.id}}
			</div>
			<div>
				<label>Nombre: </label>
				<input [(ngModel)]="jugador.name" />
			</div>
            <div class="cajas">
            <label>Presentación: </label>
                <input [(ngModel)]="jugador.presentacion" />
            </div>
            <div class="cajas">
            <label>Puntos: </label>
                <input [(ngModel)]="jugador.puntos" />
		      </div>
            <label>Estado</label>
            <select  [(ngModel)]="jugador.estado"/>
            <option value="1">Pendiente de activación</option>
            <option value="2">Activado</option>
            <option value="3">Suspendido</option>
            <option value="4">Dado de baja</option>
            </select>
        </div>
	`
})

export class JugadorDetalleComponent {
	// Le decimos a angular que jugador es una propiedad de tipo
	// Jugador, y que se gestiona como un input
	@Input() jugador: Jugador;
}







