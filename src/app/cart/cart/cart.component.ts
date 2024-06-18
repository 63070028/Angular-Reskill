import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Cart} from "./model/cart";
import {CartService} from "./service/cart.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: Cart;
  cartService:CartService = inject(CartService);
  constructor() {
      this.cart = this.cartService.getCartById();
  }
}
