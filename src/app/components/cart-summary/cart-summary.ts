import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho/carrinhoService';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  carrinhoService = inject(CarrinhoService);

  finalizarCompra() {
    if (this.carrinhoService.itens().length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    alert('Compra finalizada com sucesso!');
    this.carrinhoService.limparCarrinho();
  }
}
