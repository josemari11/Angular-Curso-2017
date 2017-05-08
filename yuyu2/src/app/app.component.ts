import { Component } from '@angular/core';

// Decorador
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/dashboard">Podio</a>
        <a routerLink="/jugadores">Lista</a>
        <router-outlet></router-outlet>
`
})
 
 //Exportación de la clase
 export class AppComponent{
     title ="Gestión de jugadores";
 
 }
