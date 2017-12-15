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
  image=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=[
      { image: 'samsung1.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung1.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review:The most beautiful phone ever has one wildly annoying issue ' }
    ];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestPage');
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }

}
