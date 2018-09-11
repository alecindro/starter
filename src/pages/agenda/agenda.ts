import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PacienteDTO } from '../model/pacienteDTO';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  eventopacientes: any = '';
  pacienteDTO: PacienteDTO;
  
  constructor(public appCtrl: App, public navParams: NavParams,public navCtrl: NavController) {
  this.eventopacientes = navParams.get("eventopacientes");
  this.pacienteDTO = navParams.get("paciente");  
  }

  goHome(){
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
