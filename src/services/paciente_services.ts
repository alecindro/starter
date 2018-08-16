import {Injectable} from "@angular/core";
import {PACIENTES} from "./paciente_mock";

@Injectable()
export class PacienteService {
  private pacientes: any;

  constructor() {
    this.pacientes = PACIENTES;
  }

  getAll() {
    return this.pacientes;
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