import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {  ViewChild } from '@angular/core';
import {  Slides } from 'ionic-angular'
import {DetailsPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs:any='0';
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
  }
  
  changeWillSlide($event) {
 this.tabs = $event._snapIndex.toString();
}
  selectTab(index){
    this.pageSlider.slideTo(index);
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }
}
