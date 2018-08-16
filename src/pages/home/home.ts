import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {PacienteService} from '../../services/paciente_services';
import { CheckinPage } from '../checkin/checkin';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  enableSearch:boolean=false;
  searchText = '';
  pacientes = [];
  filteredList = [];
  paciente = '';
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pacienteService: PacienteService) {
   }
  ngOnInit() {
    this.pacientes = this.pacienteService.getAll();
    this.filteredList = this.pacientes;
  }
  search() {
    const text = this.searchText.toLowerCase().trim();
    this.filteredList = this.pacientes.filter(c => {
      const fc = Object.assign({}, c);
      delete fc.createdAt;            //ignore createdAt
      return JSON.stringify(fc).toLowerCase().indexOf(text) > -1;
    });
  }
  
  showSearch(){
    this.enableSearch = !this.enableSearch;
  }

  checkin(paciente){
    paciente.checkin = !paciente.checkin;
  }

  clickPaciente(paciente){
    if(paciente.checkin){
    this.detailPaciente(paciente);
    }else{
      this.openCheckin(paciente);
    }
  }

  private openCheckin(paciente){
    let modal = this.modalCtrl.create(CheckinPage, {_paciente : paciente });
    modal.present();
  }

  private detailPaciente(paciente){
    this.navCtrl.push(FeedPage,{"paciente":paciente});
  }
}
