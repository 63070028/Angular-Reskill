import { Injectable } from '@angular/core';
import {Cart} from "../model/cart";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private mockCart: Cart = {
    totalSku: 2,
    totalQty: 4,
    items:[
      {
        name: "Item1",
        sku: "1",
        price: 100,
        qty: 2,
      },
      {
        name: "Item2",
        sku: "1",
        price: 100,
        qty: 2,
      },
      {
        name: "Item3",
        sku: "3",
        price: 100,
        qty: 2,
      },
      {
        name: "Item4",
        sku: "4",
        price: 100,
        qty: 2,
      },
      {
        name: "Item5",
        sku: "5",
        price: 100,
        qty: 2,
      },
    ]
  }
  constructor() {}

  public getCartById():Cart{
    return this.mockCart;
  }

}
