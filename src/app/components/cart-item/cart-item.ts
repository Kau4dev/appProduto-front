import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho/carrinho-service';
import { ModalConfirm } from '../modal-confirm/modal-confirm';
import { ItemCarrinho } from '../../types/item-carrinho';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, CurrencyPipe, ModalConfirm],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: ItemCarrinho;
  @Output() produtoRemovido = new EventEmitter<string>();
  private carrinhoService = inject(CarrinhoService);
  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  confirmarRemocao() {
    const nomeProduto = this.item.produto.nome;
    this.carrinhoService.removerProduto(this.item.produto.id);
    this.fecharModal();
    this.produtoRemovido.emit(nomeProduto);
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
