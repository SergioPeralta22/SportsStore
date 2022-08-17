import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
