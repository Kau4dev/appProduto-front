import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartItem } from '../../components/cart-item/cart-item';
import { CarrinhoService } from '../../services/carrinho/carrinho-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Alert } from '../../components/alert/alert';

@Component({
  selector: 'app-carrinho',
  imports: [CartSummary, CartItem, CommonModule, RouterLink, Alert],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinhoService = inject(CarrinhoService);
  private cdr = inject(ChangeDetectorRef);
  mensagemAlerta: string = '';
  tipoAlerta: 'success' | 'danger' | 'warning' | 'info' = 'info';

  onProdutoRemovido(nomeProduto: string) {
    this.mostrarAlerta(`${nomeProduto} removido do carrinho!`, 'success');
  }

  onCompraFinalizada(status: string) {
    if (status === 'vazio') {
      this.mostrarAlerta('Seu carrinho está vazio!', 'warning');
    } else {
      this.mostrarAlerta('Compra finalizada com sucesso!', 'success');
    }
  }

  mostrarAlerta(mensagem: string, tipo: 'success' | 'danger' | 'warning' | 'info' = 'info') {
    this.mensagemAlerta = mensagem;
    this.tipoAlerta = tipo;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.mensagemAlerta = '';
      this.cdr.detectChanges();
    }, 3000);
  }
}
