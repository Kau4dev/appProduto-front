import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  cartItems = [
    {
      nome: 'Produto Exemplo',
      preco: 99.99,
    },
    {
      nome: 'Produto Exemplo 2',
      preco: 49.99,
    },
    {
      nome: 'Produto Exemplo 3',
      preco: 29.99,
    },
  ];
}
