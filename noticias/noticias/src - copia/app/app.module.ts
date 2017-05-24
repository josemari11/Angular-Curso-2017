import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { HttpModule }    from '@angular/http';
// Estos dos imports son para cargar y configurar la api in-memory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule }	 from './app-routing.module';

import { AppComponent }  from './app.component';
import { NoticiasComponent }  from './noticias.component';
import { NoticiasService } from './noticias.service';
import { DetalleComponent }  from './detalle.component';

@NgModule({
	imports:      [ 
		BrowserModule, 
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
	],
	declarations: [ AppComponent, NoticiasComponent, DetalleComponent ],
	bootstrap:    [ AppComponent ],
  providers: 	[ NoticiasService ]
})
export class AppModule { }
