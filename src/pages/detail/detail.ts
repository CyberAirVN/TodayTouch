import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommentPage} from '../comment/comment';
import {BookmarkPage} from '../bookmark/bookmark';

@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})

export class DetailsPage {
  news=[];
  news2=[];
  constructor(public navCtrl: NavController) {
    this.news=[
      {img:'samsung.jpg', title:'Goodbye, home button: iPhone 8 may be more radical than thought '},
      {img:'samsung2.jpg', title:'Goodbye, home button: iPhone 8 may be more radical than thought '}
    ];
    this.news2=[
      {img:'samsung1.jpg', title:'Goodbye, home button: iPhone 8 may be more radical than thought '},
      {img:'samsung.jpg', title:'Goodbye, home button: iPhone 8 may be more radical than thought '}

    ];
  }
  openNavCommentPage(item) {
    this.navCtrl.push(CommentPage, { item: item });
  }
  openNavbookmarkPage(item) {
    this.navCtrl.push(BookmarkPage, { item: item });
  }
  
}