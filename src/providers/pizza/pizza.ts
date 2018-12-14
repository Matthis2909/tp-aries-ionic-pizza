import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PizzaInterface} from "../../interfaces/pizza.interfaces";
import {map} from "rxjs/operators";

const API_URL = 'http://demo3006180.mockable.io';

@Injectable()
export class PizzaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PizzaProvider Provider');
  }

  public fetchPizza(): Observable<PizzaInterface[]> {
    return this.http
        .get(API_URL + '/pizza')
        .pipe(
            map((response : PizzaInterface[]) => {
              return response;
            })
        )
  }

  public getPizzaById(pizzaId: number = 1): Observable<PizzaInterface> {
      return this.http
          .get(API_URL + '/pizza')
          .pipe(
              map((response : PizzaInterface[]) => {
                  return response.find(pizza => pizza.id === pizzaId);
              })
          )
  }

}
