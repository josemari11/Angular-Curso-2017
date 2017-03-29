import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hola {{name}}</h1>
  <p> desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
  
  `,
})
//AppComponent es la clase que representa a este componente
export class AppComponent  { name = 'Mundo, qué hacemos'; }
