import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, IonicPage, MenuController } from 'ionic-angular';
=======
import { NavController, IonicPage } from 'ionic-angular';
>>>>>>> 58cf24e3490ad09f97ba7c25d8ac4cd7fc9f296a

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login(){
    this.navCtrl.setRoot("CategoriasPage")
  }

}
