// Importamos la clase Component del paquete angular/core
import { Component , OnInit} from '@angular/core';
import { Jugador } from './jugador';
import { JugadorService } from './jugador.service';
import { Boca } from './boca';

//decorator del componente 
@Component({
  selector: 'my-jugadores',
  templateUrl: './html/app.dashboard.html',
  providers: [JugadorService],	
})

//declaración de la clase 
export class DashboardComponent implements OnInit {
    jugadores: Jugador[] =[];
    //el constructor se ejecuta cuando se instancia la clase
    constructor(private jugadorService: JugadorService){
        
        //ngOnInit se ejecuta cuando la clase se ha terminado de inicializar
        ngOnInit(): void{
            this.jugadorService.getJugadores().then(
                jugadores => this.jugadores = jugadores.slice(0,3);
            );
        }
    }

