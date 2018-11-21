import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {
  itens: string[] = ['Elis Regina', 'Tim Maia','Cazuza', 'Roberto Carlos','Wilson Simonal','Milton Nascimento','Ney Matogrosso','Maiza','Gal Costa',
  'Maria Bethania', 'Elizeth Cardoso','Alcione', 'Beth Carvalho','Ivete Sangalo' ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListasPage');
  }
  selecionarItem(item){
    console.log(item);
  }
}
