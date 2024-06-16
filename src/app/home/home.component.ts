import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ItemSearchComponent} from "./components/item-search/item-search.component";
import {Item} from "./models/Item";
import {ItemComponent} from "./components/item/item.component";
import {NgForOf} from "@angular/common";
import {ItemService} from "../util/service/item.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ItemSearchComponent, ItemComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: Item[] = [];
  itemService: ItemService = inject(ItemService);

  constructor() {
    this.items = this.itemService.getAllItem();
  }
}
