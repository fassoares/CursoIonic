import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }
  abrirActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title:"Click na opção",
      buttons:[
        {
          text:'Opção A',
          icon:'analytics',
          role:'destuctive',
          handler: ()=> {
            alert("teste do actionSheet, vocÊ cliclou na opção A.");
          }
        },
        {
          text: 'Opção b',
          icon:'aperture',
          handler: ()=> {
            alert("teste do actionSheet, vocÊ clicou na opção B.");
          }
        },
        {
          text: 'Cancelar',
          icon:'exit',
          role: 'cancel',
          handler: ()=> {
            alert("teste do actionSheet, você clicou na opção Cancelar.");
          }
        }
      ]

    });
    actionSheet.present();
  }
}
