import { Paciente } from "./paciente";
import { Usuario } from "./usuario";

export class Evento{
    idevento: number;
	descevento: string;
	dataevento: Date;
	dataregistro: Date;
	enabled: boolean;
	obsevento: string;
	grupoevento: string;
	subgrupoevento: string;
	respeventos: string;
	idusuario: number;
	idpaciente: number;
	peso: number;
    hour: string;
	data: string;
	usuario: Usuario;
	paciente: Paciente;
	resumo: string;
	quantidade: string;
	aspecto: string;
	descricao: string;
	value: number;
	pressaoinicial: number;
	pressaofinal: number;

}