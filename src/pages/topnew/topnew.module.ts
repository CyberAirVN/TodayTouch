import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopnewPage } from './topnew';

@NgModule({
  declarations: [
    TopnewPage,
  ],
  imports: [
    IonicPageModule.forChild(TopnewPage),
  ],
})
export class TopnewPageModule {}
