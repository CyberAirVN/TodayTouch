import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../detail/detail';

@Component({
  selector: 'trending',
  templateUrl: 'Trending.html'
})
export class TrendingPage {

  constructor(public navCtrl: NavController) {

  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }

}