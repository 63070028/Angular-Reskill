import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent{

  @Input() item!: Item;
  widthQty :number = 0;


  // widthQty = this.item.qty/this.item.stock*100;

}
