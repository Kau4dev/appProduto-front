import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho/carrinho-service';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  carrinhoService = inject(CarrinhoService);
  @Output() compraFinalizada = new EventEmitter<string>();

  finalizarCompra() {
    if (this.carrinhoService.itens().length === 0) {
      this.compraFinalizada.emit('vazio');
      return;
    }
    this.carrinhoService.limparCarrinho();
    this.compraFinalizada.emit('sucesso');
  }

  // O componente apenas emite evento para o pai; o pai exibirá o alerta
}
