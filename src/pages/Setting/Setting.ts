import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'Setting.html'
})
export class SettingPage {

  items = [];

  constructor(public navCtrl: NavController) {

    this.items=[
      {title: 'Compact layout' },
      {title: 'Use carousel display' },
      {title: ' Text size'},
      {title: 'Accessibility' },
      {title: 'Breaking new sound' },
      {title: 'Backround syncing'},
      {title: 'About app' }

    ];

  }
}
