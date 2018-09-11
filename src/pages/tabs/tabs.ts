import { Component } from '@angular/core';

import { AnotacoesPage } from '../anotacoes/anotacoes';
import { AgendaPage } from '../agenda/agenda';
import { FeedPage } from '../feed/feed';

import { NavController, NavParams, IonicPage} from 'ionic-angular';

import {EventoPacienteService} from '../../services/evento_paciente_services'
import { PhotoPage } from '../photo/photo';
import { PacienteDTO } from '../model/pacienteDTO';
import { Evento } from '../model/evento';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabEventos = FeedPage;
  tabAgenda = AgendaPage;
  tabAnotacao = AnotacoesPage;
  tabPhoto = PhotoPage;

  tabParams: any;


  constructor(public navCtrl: NavController,public navParams: NavParams, public eventoPacienteService: EventoPacienteService) {
    let pacienteDTO : PacienteDTO = navParams.get("paciente");
    this.tabParams = {"paciente":pacienteDTO};
      
  }
}
