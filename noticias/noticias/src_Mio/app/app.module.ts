import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListadoComponent }  from './listado.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ListadoComponent ],
  bootstrap:    [ ListadoComponent ]
})
export class ListadoModule { }
