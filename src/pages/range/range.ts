import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {
  valorPizza: number =0;
  mlSuco: number = 15;
  grfVinho: number=0;
  vlIdadeIntervalo: any = {lower:0.01, upper:12};
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

}
