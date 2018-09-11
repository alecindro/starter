import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {PacienteService} from '../../services/paciente_services';
import { CheckinPage } from '../checkin/checkin';
import { TabsPage } from '../tabs/tabs';
import { PacienteDTO } from '../model/pacienteDTO';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  enableSearch:boolean=false;
  searchText = '';
  filteredList : Array<PacienteDTO>= [];
  pacienteDTOS : Array<PacienteDTO>= [];
  
  
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    public pacienteService: PacienteService) {
   }
  ngOnInit() {
    this.pacienteService.getAll().subscribe(
      (data: Array<PacienteDTO>) => 
      {
        let pacientedtos = data;
        for(let pacientedto of pacientedtos){
          if(!pacientedto.photo){
            pacientedto.photo = '../../assets/imgs/rsz_1no-avatar.jpg';
          }
          this.filteredList.push(pacientedto);
        } 
        this.pacienteDTOS = this.filteredList;
      }, error => console.log(error));
    
  }
  search() {
    const text = this.searchText.toLowerCase().trim();
    this.filteredList = this.pacienteDTOS.filter(c => {
      const fc = Object.assign({}, c);
      //delete fc.createdAt;            //ignore createdAt
      return JSON.stringify(fc).toLowerCase().indexOf(text) > -1;
    });
  }
  
  showSearch(){
    this.enableSearch = !this.enableSearch;
  }

  checkin(paciente){
    paciente.checkin = !paciente.checkin;
  }

  clickPaciente(pacienteDTO){
    if(pacienteDTO.checkin){
    this.detailPaciente(pacienteDTO);
    }else{
      this.openCheckin(pacienteDTO);
    }
  }

  private openCheckin(pacienteDTO){
    let modal = this.modalCtrl.create(CheckinPage, {_paciente : pacienteDTO });
    modal.present();
  }

  private detailPaciente(pacienteDTO){
    this.navCtrl.push(TabsPage,{"paciente":pacienteDTO});
  }
}
