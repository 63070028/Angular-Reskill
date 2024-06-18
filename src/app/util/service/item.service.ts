import { Injectable } from '@angular/core';
import {Item} from "../../home/models/Item";
import {ItemDetails} from "../../item-details/model/itemDetails";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
   private mockItem: Item[] = [
    {id:1, name:"Item1", price:100, qty:5, stock:10},
    {id:2, name:"Item2", price:200, qty:5, stock:10},
    {id:3, name:"Item3", price:300, qty:2, stock:10},
    {id:4, name:"Item4", price:400, qty:1, stock:10},
    {id:5, name:"Item5", price:500, qty:4, stock:10},
    {id:6, name:"Item6", price:600, qty:10, stock:10},
    {id:7, name:"Item7", price:700, qty:10, stock:10},
    {id:8, name:"Item8", price:800, qty:10, stock:10},
    {id:9, name:"Item9", price:900, qty:10, stock:10},
    {id:10, name:"Item10", price:1000, qty:10, stock:10},
    {id:11, name:"Item11", price:1100, qty:10, stock:10},
    {id:12, name:"Item12", price:1200, qty:10, stock:10},
  ]

  private mockItemsDetails: ItemDetails[] = [
    {sku: "1", name:"Item1", price: 100, reviewAvg:4.5, reviewCount:10},
    {sku: "2", name:"Item2", price: 200, reviewAvg:4.5, reviewCount:10},
    {sku: "3", name:"Item3", price: 300, reviewAvg:4.5, reviewCount:10},
    {sku: "4", name:"Item4", price: 400, reviewAvg:4.5, reviewCount:10},
    {sku: "5", name:"Item5", price: 500, reviewAvg:4.5, reviewCount:10},
    {sku: "6", name:"Item6", price: 600, reviewAvg:4.5, reviewCount:10},
    {sku: "7", name:"Item7", price: 700, reviewAvg:4.5, reviewCount:10},
    {sku: "8", name:"Item8", price: 800, reviewAvg:4.5, reviewCount:10},
    {sku: "9", name:"Item9", price: 900, reviewAvg:4.5, reviewCount:10},
    {sku: "10", name:"Item10", price: 1000, reviewAvg:4.5, reviewCount:10},
    {sku: "11", name:"Item11", price: 1100, reviewAvg:4.5, reviewCount:10},
    {sku: "12", name:"Item12", price: 1200, reviewAvg:4.5, reviewCount:10},
  ]

  constructor() { }

  public getAllItem():Item[]{
    return this.mockItem;
  }

  public getItemById(id:string):ItemDetails | undefined {
      return this.mockItemsDetails.find( item => item.sku === id);
  }
}
