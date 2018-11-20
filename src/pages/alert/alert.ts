import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCrtl:AlertController) {
  }
  abrirComponenteAlert(){
    let alert = this.alertCrtl.create(
      {
        title: "Atenção",
        subTitle: "Esse é um sub titulo do alert",
        buttons: ['Ok']
      }
    );
      alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  
  ConfirmarAlert(){
    let alert = this.alertCrtl.create({
      title: "ATENÇÃO",
      subTitle:"VocÊ tem certeza que quer confirmar a ação de asalvar os dados na tela?",
      // a propiedade buttons é um arrey de botões que ira executar uma ação
      buttons:[
        {
          text:"Confirmar",
          // a propriedade handeler executa uma ação que será executada 
          //quando o botão for acionado, chama-se uma função
          handler:() =>{
            console.log('Rotina executada quando o botão confirmar for precioando')
          }         
        },
        {
          text:"Cancelar",
          handler: ()=>{
            console.log('Você Cancelou a ação, vamos executar a rotina de cancelamento da ação')
          }
        }
      ]
    })
    alert.present();

  }

  EntrarDadosAlert(){
    let alert = this.alertCrtl.
  }
}
