import { Component, inject } from '@angular/core';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartItem } from '../../components/cart-item/cart-item';
import { CarrinhoService } from '../../services/carrinho/carrinhoService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [CartSummary, CartItem, CommonModule, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinhoService = inject(CarrinhoService);
}
