import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewChild } from '@angular/core';
import {  Slides } from 'ionic-angular'
/**
 * Generated class for the BookmarkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
})
export class BookmarkPage {
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs:any='0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkPage');
  }
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
   }
     selectTab(index){
       this.pageSlider.slideTo(index);
     }

}
