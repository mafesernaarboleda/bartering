import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
import { PostPage } from '../post/post';

@Component({
  selector: 'tabs-controller',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabNotification = NotificationPage;

  constructor(public modalCtrl: ModalController) { }

      openModal(characterNum) {
        let modal = this.modalCtrl.create(PostPage, characterNum);
        modal.present();
      }
}
