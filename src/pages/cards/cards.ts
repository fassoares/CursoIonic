import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
