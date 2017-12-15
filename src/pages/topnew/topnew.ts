import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from '../detail/detail';

/**
 * Generated class for the TopnewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topnew',
  templateUrl: 'topnew.html',
})
export class TopnewPage {
  image=[];
  image2=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=[
      { image: 'samsung1.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review' },
    ];
    this.image2=[
      { image: 'samsung1.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review' },
      { image: 'samsung2.jpg', title: 'Samsung Galaxy S8 review' }

    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopnewPage');
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }


}
