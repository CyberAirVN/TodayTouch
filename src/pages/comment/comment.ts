import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  comment=[];
  constructor(public navCtrl: NavController) {
    this.comment=[
      {name:'Naruto', img:'naruto.jpg', cmt:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'},
      {name:'Sasuke', img:'sasuke.jpg', cmt:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'},
      {name:'Rock Lee', img:'lee.jpg', cmt:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'}

    ];
  }
  openNavCommentPage(item) {
    this.navCtrl.push(CommentPage, { item: item });
  }

}
