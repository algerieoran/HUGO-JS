import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

class Ingredient {
}

/**
 * Generated class for the RecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettePage');
  }



}
