import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { AppComponent }  from './app.component';
import { JugadoresComponent }  from './jugadores.component';
import { DashboardComponent }  from './dashboard.component';
import { JugadorService } from './jugador.service';
import { JugadorDetalleComponent }  from './jugador-detalle.component';

@NgModule({
  imports:      [ 
	BrowserModule, 
	FormsModule, 
	RouterModule.forRoot([
		{path: 'jugadores', component: JugadoresComponent},
		{path: 'dashboard', component: DashboardComponent},
		{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	])
  
  ],
  declarations: [ AppComponent, JugadorDetalleComponent, JugadoresComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ JugadorService ]
})


export class AppModule { }










