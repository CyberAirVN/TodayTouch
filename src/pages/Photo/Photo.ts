import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-photo',
  templateUrl: 'Photo.html'
})
export class PhotoPage {
    image=[];

  constructor(public navCtrl: NavController) {
      this.image=[
        { image: 'samsung1.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung2.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung2.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung1.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' },
        { image: 'samsung2.jpg', title: 'Learn to build an image gallery with zoom inside your Ionic app, read the full post here: ' }    
      ];
  
  }

}
