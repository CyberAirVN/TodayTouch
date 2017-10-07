import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {  ViewChild } from '@angular/core';
import {  Slides } from 'ionic-angular'
import {DetailsPage} from '../detail/detail';
import {SettingPage} from '../Setting/Setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toggled: boolean;
  searchTerm: String = '';
  items: string[];
  shownGroup = null;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs:any='0';

  
  constructor(public navCtrl: NavController) {
    this.toggled = false;
    this.initializeItems();  
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

  openNavSettingPage(item) {
    this.navCtrl.push(SettingPage, { item: item });
  }

  toggleSearch(group) {
    this.toggled = this.toggled ? false : true;
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
      document.getElementById("display").style.display="none";
      
  } else {
      this.shownGroup = group;
     document.getElementById("display").style.display="block";
  }

}

initializeItems() {
    this.items = ['Amsterdam','Bogota','Mumbai','San José','Salvador']; 
 }    

triggerInput( ev: any ) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  
}
toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;

    } else {
        this.shownGroup = group;
    }
    
};
isGroupShown(group) {
    return this.shownGroup === group;
};


}
