import { Component, Input, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ItemCarrinho, CarrinhoService } from '../../services/carrinho/carrinho-service';
import { ModalConfirm } from '../modal-confirm/modal-confirm';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, CurrencyPipe, ModalConfirm],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: ItemCarrinho;
  private carrinhoService = inject(CarrinhoService);
  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  confirmarRemocao() {
    this.carrinhoService.removerProduto(this.item.produto.id);
    this.fecharModal();
  }

  aumentarQuantidade() {
    this.carrinhoService.atualizarQuantidade(this.item.produto.id, this.item.quantidade + 1);
  }

  diminuirQuantidade() {
    if (this.item.quantidade > 1) {
      this.carrinhoService.atualizarQuantidade(this.item.produto.id, this.item.quantidade - 1);
    }
  }
}
