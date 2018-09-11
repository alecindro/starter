import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { FeedAddModal } from './feedaddModal';

@NgModule({
  declarations: [
    FeedPage,FeedAddModal
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    IonicPageModule.forChild(FeedAddModal)
  ],
})
export class FeedPageModule {}
