import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Spinner } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController ) {
  }

  ionViewDidLoad() {
    let aguarde = this.loadingCtrl.create({
      content: "Carregando ...",
      duration: 1500
    });
    aguarde.present();
  }
  salvar(){
    console.log('oi');
    let save = this.loadingCtrl.create({
      content: 'Save Please wait .....'
    })
    save.present();
    console.log('tarefa executando');
    setTimeout(()=>{
      console.log('Data Save is OK!');
      save.dismiss()},2000)

  }
}
