import { ViewController, NavParams, Platform } from "ionic-angular";
import { Component } from "@angular/core";
import { PacienteDTO } from "../model/pacienteDTO";
import { Evento } from "../model/evento";
import { EventoRotina } from "../model/rotinas";

@Component({
    templateUrl: 'feedadd.html'
  })
export class FeedAddModal{

    pacienteDTO: PacienteDTO;
    evento: Evento;
    datahora:string;
    eventorotina:EventoRotina = new EventoRotina();
    descricaoEvento:string[];
    rotinas:string[];
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
      ){
          
        this.pacienteDTO = params.get('pacienteDTO');
        this.evento = params.get('evento');
        let _data = this.evento.dataregistro;
        this.datahora = new Date(Date.UTC(_data.getFullYear(), _data.getMonth(), _data.getDay(), _data.getHours(), _data.getMinutes(), _data.getSeconds())).toISOString();
        this.descricaoEvento = this.eventorotina.getDescricaoEvento();
      }

      selectedDescricao(descricao:string){
        this.rotinas = this.eventorotina.getRotinas(descricao);

      }

      dismiss() {
        this.viewCtrl.dismiss();
      }
}