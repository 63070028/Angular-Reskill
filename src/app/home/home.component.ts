import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ItemSearchComponent} from "./components/item-search/item-search.component";
import {Item} from "./models/Item";
import {ItemComponent} from "./components/item/item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ItemSearchComponent, ItemComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: Item[] = [
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
}
