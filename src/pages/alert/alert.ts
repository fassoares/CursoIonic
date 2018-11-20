import { Component } from '@angular/core';
import { IonicPage, AlertController, Button } from 'ionic-angular';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

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

  constructor(private alertCrtl: AlertController) {
  }
  abrirComponenteAlert() {
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

  ConfirmarAlert() {
    let alert = this.alertCrtl.create({
      title: "ATENÇÃO",
      subTitle: "VocÊ tem certeza que quer confirmar a ação de asalvar os dados na tela?",
      // a propiedade buttons é um arrey de botões que ira executar uma ação
      buttons: [
        {
          text: "Confirmar",
          // a propriedade handeler executa uma ação que será executada 
          //quando o botão for acionado, chama-se uma função
          handler: () => {
            console.log('Rotina executada quando o botão confirmar for precionado.')
          }
        },
        {
          text: "Cancelar",
          handler: () => {
            console.log('Você Cancelou a ação, vamos executar a rotina de cancelamento.')
          }
        },
        {
          text: 'Não sei o que escolher',
          handler: () => {
            console.log('Estou indeciso!')
          }

        }
      ]
    })
    alert.present();

  }

  EntrarDadosAlert() {
    let alert = this.alertCrtl.create({
      title: "Faça seu login para acesso a tela seguinte.",
      // A propriedade inputs é um arrei de campos para ENTRADAS de dados.
      inputs: [
        {
          name: 'usuario', //nome do campo
          placeholder: 'digite seu login' // conteudo digitado do campo
        },
        {
          name: 'senha',
          placeholder: 'digite a senha',
          type: 'password'
        }
      ],
      // a propriedade buttons do alert, é um array que geralmente tem dois botões,
      // uma para validar e outro para cancelar, pode haver, mais basta  ter a necessidade 
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Autenticação CANCELADA pelo usuário!')
          }
        },
        {
          text: 'Entrar',
          handler: data => {
            if (data.usuario == "Francisco" && data.senha == '321') {
              console.log("Usuário autenticado com SUSSESSO!")
            }
            else {
              console.log("Usuário ou senha não confere!")
              console.log(data.usuario)
              console.log(data.senha)
            }
          }

        }
      ]
    }).present();
  }
  radioAlert() {
    let alert = this.alertCrtl.create(
    /*  {
        title: 'Apresentação de dodos do tipo RadionBottons',
        subTitle: 'Esolha das Cores Primárias',
        inputs: [
          {
            type: 'radio',
            label: 'Amarelo',
            value: "amarelo",
            checked: true
          },
          {
            type:'radio',
            label: 'Vermelho',
            value: 'vermelho',
            checked: false
          },
          {
            type: 'radio',
            label: 'Azul',
            value:'azul',
            checked: false
          }
        ],
        buttons: [
          {
            text: 'Ok',
            handler: (data: any) =>{
              console.log('A cor selecionada foi',data);
            }

          }
        ]

    }*/);
    alert.setTitle('Opção de cores');
    alert.addInput({
      type: 'radio',
      label: 'Amarelo',
      value: "amarelo",
      checked: true

    });
    alert.addInput({
      type:'radio',
      label: 'Vermelho',
      value: 'vermelho',
      checked: false

    });
    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value:'azul',
      checked: false

    })
    alert.addButton({
      text: "Cancela",
      role: 'cancel'
    });
    alert.addButton({
      text: "Ok",
      handler: (data: any) => {
        console.log('Cor escolhida foi:',data)
      }

    })
    alert.present();
  }
  checkAlert(){
    let alert = this.alertCrtl.create({
      title:"Alert com o controle do Check Box",
      subTitle:"Montar cores secundaria através do chekBox.",
      inputs:[
        {
          type:'checkbox',
          label:'Azul',
          value:'azul',
          checked: true
        },
        {
          type:'checkbox',
            label:'Amarelo',
            value:'amarelo',
            checked: true
        },
        {
          type:'checkbox',
          label: "Vermelho",
          value: 'vermelho'
        }
      ],
      buttons: [
        {
          text: "Ok",
          handler: (data:any) => {
            if (data == "azul" && data == "amarelo"){ 
              console.log('Você formou a cor Verde, com as cores primárias:',data)             
              
            }
            if (data == 'amarelo' && data == 'vermelho'){              
            console.log('Você formou a cor Laranja, com as cores primárias:',data)
            }
            if (data == 'vermelho' && data == 'azul'){              
            console.log('Você formou a cor Violeta, com as cores primárias:',data)
            }
            console.log('As cores primarias são:',data)
          }
        },
        {
          text: 'cancelar',
          role:'cancel'
        }
      ]
    });
    /*alert.setTitle('Alert com o controle do Check Box');
    alert.setSubTitle('Montar cores secundaria através do chekBox'),
    alert.addInput(
      {
        type:'checkbox',
        label:'Verde',
        value:'verde',
        checked: true});
    alert.addInput(
          {
            type:'checkbox',
            label:'Laranja',
            value:'laranja',
            checked: false});
    alert.addInput(
      {
        type:'checkbox',
        label:'Roxo ou Violeta',
        value:'violeta',
        checked: false}
    );
    alert.addButton({
      text:'Cancelar',
      role:'cancel'
    })
    alert.addButton({
      text:'Ok',
      handler: (data:any) => {
          if (data == 'verde'){
            console.log('As cores primarias Azul e Amarelo formama o',data)
          }
          if ( data == "laranja"){
            console.log('As cores primarias Amarelo e Vermelho formama o',data)
          }
          if ( data=='violeta'){
            console.log('As cores primarias Vermelho e o Azul formama o',data)

          }
        }
    });*/
    alert.present();
  }
}
