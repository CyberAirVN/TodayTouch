import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from '../detail/detail';

/**
 * Generated class for the LatestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-latest',
  templateUrl: 'latest.html',
})
export class LatestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestPage');
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }

}
