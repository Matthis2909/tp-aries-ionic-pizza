import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PizzaProvider} from "../../providers/pizza/pizza";
import {PizzaInterface} from "../../interfaces/pizza.interfaces";
import {DetailPizzaPage} from "../detail-pizza/detail-pizza";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizzas : PizzaInterface[] = [];

  constructor(public navCtrl: NavController, private pizzaProvider : PizzaProvider) {
    this.fetchPizza();
  }

  public fetchPizza(){
    this.pizzaProvider.fetchPizza()
        .subscribe(data => {
          if (data){
            console.log(data);
            this.pizzas = data;
          }
        })
  }

  public navigateToDetail(pizzaId: number = 1){
      this.navCtrl.push(DetailPizzaPage, {id: pizzaId})
  }
}
