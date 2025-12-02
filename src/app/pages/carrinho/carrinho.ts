import { Component } from '@angular/core';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartItem } from '../../components/cart-item/cart-item';

@Component({
  selector: 'app-carrinho',
  imports: [CartSummary, CartItem],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {}
