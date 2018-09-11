import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PacienteDTO } from '../model/pacienteDTO';
import { Evento } from '../model/evento';
import { EventoPacienteService } from '../../services/evento_paciente_services';
import { FeedAddModal } from './feedaddModal';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  eventopacientes: Array<Evento> = [];
  pacienteDTO: PacienteDTO;
  
  constructor(
    public appCtrl: App, 
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalAddEvento: ModalController,
    public eventoPacienteService: EventoPacienteService) {

  this.pacienteDTO = navParams.get("paciente");  
  eventoPacienteService.getByPaciente(this.pacienteDTO.paciente.idpaciente, new Date()).subscribe(
    (data:Array<Evento>)=>{
      this.eventopacientes = data;      
    });
}

  goHome(){
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  addEvento(){
    let evento =  new Evento();
    evento.dataregistro = new Date();
    let modal = this.modalAddEvento.create(FeedAddModal, {pacienteDTO: this.pacienteDTO,evento:evento});
    modal.present();
  }

}
