import {Component, inject} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ItemDetails} from "./model/itemDetails";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../util/service/item.service";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {

  protected readonly Intl = Intl;
  route: ActivatedRoute = inject(ActivatedRoute);
  itemService = inject(ItemService);

  itemDetails: ItemDetails | undefined;
  constructor() {
    this.itemDetails = this.itemService.getItemById(this.route.snapshot.params['id']);
  }

}
