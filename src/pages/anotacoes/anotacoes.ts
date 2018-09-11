import { Component} from '@angular/core';
import { NavController, NavParams, App, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PacienteDTO } from '../model/pacienteDTO';

/**
 * Generated class for the AnotacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotacoes',
  templateUrl: 'anotacoes.html'
})

export class AnotacoesPage{

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
    console.log('ionViewDidLoad AnotacoesPage');
  }

}
