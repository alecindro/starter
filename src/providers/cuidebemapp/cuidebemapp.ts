
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the CuidebemappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CuidebemappProvider {

  constructor(private http: Http) {
    console.log('Hello CuidebemappProvider Provider');
  }

  getPacientes() : Observable<Response>{
    return this.http.get("http://localhost:8080/api/pacientes");
  }
  getEventos(idpaciente:number,data:Date) : Observable<Response>{
    return this.http.get("http://localhost:8080/api/eventos/"+idpaciente+"/"+data);
  }
}
