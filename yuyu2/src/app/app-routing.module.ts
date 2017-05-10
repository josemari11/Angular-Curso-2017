// IMPORTS
import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JugadoresComponent } from './jugadores.component';
import { DashboardComponent } from './dashboard.component';
import { JugadorDetalleComponent } from './jugador-detalle.component';


// DEFINIMOS UN ARRAY DE RUTAS
const routes: Routes = [
	{path: 'jugadores', component: JugadoresComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'detalle/:id', component: JugadorDetalleComponent}
];


// DECORATOR DE LA CLASE
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})


// EXPORTAMOS LA CLASE
export class AppRoutingModule {}
















