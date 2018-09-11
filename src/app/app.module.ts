import { LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { CheckinPageModule } from '../pages/checkin/checkin.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { AnotacoesPageModule } from '../pages/anotacoes/anotacoes.module';
import { AgendaPageModule } from '../pages/agenda/agenda.module';
import { PhotoPageModule } from '../pages/photo/photo.module'

import { PacienteService } from '../services/paciente_services'; 
import { EventoPacienteService } from '../services/evento_paciente_services';

import { Camera } from '@ionic-native/camera';
import { CuidebemappProvider } from '../providers/cuidebemapp/cuidebemapp';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FeedPageModule,
    CheckinPageModule,
    AgendaPageModule,
    AnotacoesPageModule,
    TabsPageModule,
    PhotoPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    PacienteService,
    EventoPacienteService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-PT'},
    Camera,
    CuidebemappProvider
  ]
})
export class AppModule {}
