import {Injectable} from "@angular/core";
import {PACIENTES} from "./paciente_mock";
import { CuidebemappProvider } from "../providers/cuidebemapp/cuidebemapp";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { PacienteDTO } from "../pages/model/pacienteDTO";
import { ServiceCuideBem } from "./services";


@Injectable()
export class PacienteService extends ServiceCuideBem{
  private pacientes: any;

  constructor(public cuidebemappProvider: CuidebemappProvider ) {
    super();
  }

  getAll() : Observable<Array<PacienteDTO>>{
    return this.cuidebemappProvider.getPacientes().map((response: Response) => <PacienteDTO>response.json())
    .do(data => {
      
    })
    .catch(this.handleError);
  }

  getItem(id) {
    for (var i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].id === parseInt(id)) {
        return this.pacientes[i];
      }
    }
    return null;
  }

  remove(item) {
    this.pacientes.splice(this.pacientes.indexOf(item), 1);
  }

  
}