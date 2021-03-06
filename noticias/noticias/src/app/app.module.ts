///////////////////////////////////////////////////////


import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

//imports de terceras partes
import {ColorPickerModule} from 'angular2-color-picker';


import { HttpModule }    from '@angular/http';
// Estos dos imports son para cargar y configurar la api in-memory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule }	 from './app-routing.module';

import { AppComponent }  from './app.component';
import { NoticiasComponent }  from './noticias.component';
import { NoticiasService } from './noticias.service';
import { DetalleComponent }  from './detalle.component';

////////////////////////////////////////////////////////
//imports de terceros
import {ColorPickerModule} from 'angular2-color-picker';


@NgModule({
	imports:      [ 
		BrowserModule, 
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
        ColorPickerModule,
	],
	declarations: [ AppComponent, NoticiasComponent, DetalleComponent ],
	bootstrap:    [ AppComponent ],
  providers: 	[ NoticiasService ]
})
export class AppModule { }
