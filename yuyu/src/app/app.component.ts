import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h1>Hola {{name}}</h1>
  <h2>Hola {{player}}</h2>
  <p> desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
  
  `,
})



//AppComponent es la clase que representa a este componente
export class AppComponent  { 
title = "Ranking de jug."
name = 'Mundo, qué hacemos';
    player : Jugador={
    id:1,
    name:"Braulio",
    presentacion ="Me presento, hale."
}


}

export class Jugador{
id:number;
name:string;
presentacion:string;
}
