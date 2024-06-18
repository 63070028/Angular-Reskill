import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {CartComponent} from "./cart/cart/cart.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'item/:id',
    component: ItemDetailsComponent,
  }, {
    path: 'cart',
    component: CartComponent,

  }
];
