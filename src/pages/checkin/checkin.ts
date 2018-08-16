import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  paciente:any = '';

  constructor( public viewCtrl: ViewController, public navParams: NavParams) {
  this.paciente = this.navParams.get('_paciente');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  checkin() {
    this.paciente.checkin = !this.paciente.checkin ;
    this.dismiss();
  }

}
