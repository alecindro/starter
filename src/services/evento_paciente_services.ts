import {Injectable} from "@angular/core";
import {EVENTO_PACIENTES} from "./evento_paciente_mock";
import { ServiceCuideBem } from "./services";
import { CuidebemappProvider } from "../providers/cuidebemapp/cuidebemapp";
import { Evento } from "../pages/model/evento";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EventoPacienteService extends ServiceCuideBem{
   

  constructor(public cuidebemappProvider: CuidebemappProvider ) {
    super();
  }

  getByPaciente(idpaciente: number, date: Date) : Observable<Array<Evento>>{
    return this.cuidebemappProvider.getEventos(idpaciente,date).map((response:Response) => <Evento>response.json())
    .do(data => {
      
    })
    .catch(this.handleError);

  }
}