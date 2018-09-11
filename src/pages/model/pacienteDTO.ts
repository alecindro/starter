import { Agenda } from "./agenda";
import { Paciente } from "./paciente";

export class PacienteDTO{
    paciente: Paciente;
	photo: string;
	checkin: boolean;
	nextAgenda: Agenda;
}