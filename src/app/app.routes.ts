import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  }, {
    path: 'item/:id',
    component: ItemDetailsComponent,
    title: 'Item Details'
  }
];
