import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';


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
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule,
  ],
  declarations: [ AppComponent, JugadorDetalleComponent, JugadoresComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ JugadorService ]
})


export class AppModule { }










