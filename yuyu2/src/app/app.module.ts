import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { AppRoutingModule }	 from './app-routing.module';

import { AppComponent }  from './app.component';
import { JugadoresComponent }  from './jugadores.component';
import { DashboardComponent }  from './dashboard.component';
import { JugadorService } from './jugador.service';
import { JugadorDetalleComponent }  from './jugador-detalle.component';

@NgModule({
  imports:      [ 
	BrowserModule, 
	FormsModule,
	AppRoutingModule,
  ],
  declarations: [ AppComponent, JugadorDetalleComponent, JugadoresComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ JugadorService ]
})


export class AppModule { }










