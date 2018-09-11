export class Paciente{
    idpaciente : number;
    nome : string;
    apelido : string;
    genero : string;
    enabled : boolean;
    datanascimento : Date;
    status : boolean;
    responsavelPacienteList : Array<Object>;
    patologiaPaciente : Array<Object>;
    idresidencia : number;
    tpestadia : boolean;
}