import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AmthucPage} from '../pages/Amthuc/Amthuc';
import {LamdepPage} from '../pages/Lamdep/Lamdep';
import {CuocSongPage} from '../pages/Cuocsong/Cuocsong';
import {DienTuPage} from '../pages/Dientu/Dientu';
import {DiDongPage} from '../pages/Didong/Didong';
import {OtoxePage} from '../pages/Otoxe/Otoxe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages= [];
  homes=[];
  congnghe=[];
  shownGroup = null;
  shownGroup2 = null;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Food', component: AmthucPage },
      { title: 'Beautiful', component: LamdepPage },
      { title: 'Life', component: CuocSongPage }
    ];
    this.homes = [
      { title: 'Home', component: HomePage}
      
    ];
    this.congnghe=[
      {title: 'Electronics', component: DienTuPage},
      {title: 'Mobile', component: DiDongPage},
      {title: 'Car-motobike', component: OtoxePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openSubCat(category){
    console.log(category)
  
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
        this.shownGroup2 = null;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
};

toggleGroup2(group) {
  if (this.isGroupShown2(group)) {
      this.shownGroup2 = null;
  } else {
      this.shownGroup2 = group;
      this.shownGroup = null;
  }
};
isGroupShown2(group) {
  return this.shownGroup2 === group;
};
}
