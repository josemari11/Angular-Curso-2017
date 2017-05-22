import { Injectable } from '@angular/core';
import { Noticia } from '/noticia';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()

export class NoticiaService{
	// propiedades privadas
	private NoticiasUrl = 'api/noticias'; // URL a la api web
	
	constructor(private http: Http)	{}
	
	getNoticias(): Promise<Noticias[]>{
		return this.http.get(this.noticiasUrl)
			.toPromise()
			.then(datos => datos.json().data as Noticia[])
			.catch(this.queHaPasado);			
	}
	
	getNoticias(id: number): Promise<Noticias> {
        
        
        const URL = `$(this.noticiasUrl)/$(id)`;
        return this.http.get(URL)
            .toPromise()
            .then(respuesta => respuesta.json().data as Noticia)
            .catch(this.queHaPasado)
        
	
	}
	
	queHaPasado(error: any): Promise<any> {
		console.log("Ha ocurrido el siguiente error: ", error);
		return Promise.reject(error.message || error);
	}
	private cabeceras = new Headers(
        {
        'Content-Type':'application/json'
        }
    );
    update(noticia:Noticia):Promise<Noticia>{
        const URL = `${this.NoticiasUrl}/${noticia.id}`;
        return this.http
            .put(
                URL,
                JSON.stringify(Noticia),
                {headers: this.cabeceras}
            )
            .toPromise()
            .then(() => noticia)
            .catch(this.queHaPasado);
    }

    crear(nombre: string):Promise<Noticia>{
         return this.http
            .post(
                this.noticiasUrl,
                    JSON.stringify(noticia),
                {headers: this.cabeceras}
            )
            .toPromise()
            .then(respuesta => respuesta.json().data as Noticia)
            .catch(this.queHaPasado)
}
	
}










