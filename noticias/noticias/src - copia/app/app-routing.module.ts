// IMPORTS
import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { NoticiasComponent } from './noticias.component';
import { DetalleComponent } from './detalle.component';


// DEFINIMOS UN ARRAY DE RUTAS
const routes: Routes = [
	{path: 'noticias', component: NoticiasComponent},
	{path: '', redirectTo: '/noticias', pathMatch: 'full'},
	{path: 'detalle/:id', component: DetalleComponent}
];


// DECORATOR DE LA CLASE
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})


// EXPORTAMOS LA CLASE
export class AppRoutingModule {}
















