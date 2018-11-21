import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-datetimes',
  templateUrl: 'datetimes.html',
})
export class DatetimesPage {
  datas: any = {
    // ano mes dia
    dia: '2018-04-16', 
    dia2: '2018-04-16',
    dia3: '2018-04-16',
    horaInicio: '08:00:08',
    horafinal: '14:00:54'
  };
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatetimesPage');
  }

}
