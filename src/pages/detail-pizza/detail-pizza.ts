import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {PizzaProvider} from "../../providers/pizza/pizza";
import {PizzaInterface} from "../../interfaces/pizza.interfaces";

/**
 * Generated class for the DetailPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-pizza',
  templateUrl: 'detail-pizza.html',
})
export class DetailPizzaPage {
  pizza: PizzaInterface;
  loader: Loading;

  constructor(private loaderCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private pizzaProvider: PizzaProvider) {
        this.getPizzaById();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPizzaPage');
  }

  public getPizzaById(){
    this.presentLoading();
    this.pizzaProvider.getPizzaById(this.navParams.get('id'))
        .subscribe(data => {
          if (data){
            this.loader.dismiss();
            this.pizza = data;
          }
        })
  }

  private presentLoading(){
    this.loader = this.loaderCtrl.create({
        content: 'Votre pizza arrive ...'
    });
    this.loader.present();
  }

}
