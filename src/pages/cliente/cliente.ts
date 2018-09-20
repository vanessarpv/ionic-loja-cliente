import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  public nomeUsuario:string = "Vanessa";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /**
   * soma 
   */
  public soma (a:number,b:number ):void {

    alert(a+b);
  }

  ionViewDidLoad() {
    this.soma(10,99);
    console.log('ionViewDidLoad ClientePage');
  }

}
