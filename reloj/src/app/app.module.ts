import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppDigital }  from './app.digital';
import { AppAnalogico }  from './app.analogico';
import { AppMenu }  from './app.menu';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppDigital, AppAnalogico, AppMenu ],
  bootstrap:    [ AppDigital, AppAnalogico, AppMenu ]
})
export class AppModule { }
