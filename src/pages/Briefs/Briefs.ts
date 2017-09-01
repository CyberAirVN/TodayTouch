import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../detail/detail';

@Component({
  selector: 'briefs',
  templateUrl: 'Briefs.html'
})
export class BriefsPage {

  constructor(public navCtrl: NavController) {

  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }


}