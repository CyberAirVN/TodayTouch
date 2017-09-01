import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturePage } from './feature';

@NgModule({
  declarations: [
    FeaturePage,
  ],
  imports: [
    IonicPageModule.forChild(FeaturePage),
  ],
})
export class FeaturePageModule {}
