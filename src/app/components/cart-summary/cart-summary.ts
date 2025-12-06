import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho/carrinho-service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, CurrencyPipe, Alert],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  carrinhoService = inject(CarrinhoService);
  mensagemAlerta: string = '';
  tipoAlerta: 'success' | 'danger' | 'warning' | 'info' = 'info';

  mostrarAlerta(mensagem: string, tipo: 'success' | 'danger' | 'warning' | 'info' = 'info') {
    this.mensagemAlerta = mensagem;
    this.tipoAlerta = tipo;
    setTimeout(() => (this.mensagemAlerta = ''), 3000);
  }

  finalizarCompra() {
    if (this.carrinhoService.itens().length === 0) {
      this.mostrarAlerta('Seu carrinho está vazio!', 'warning');
      return;
    }
    this.mostrarAlerta('Compra finalizada com sucesso!', 'success');
    this.carrinhoService.limparCarrinho();
  }
}
