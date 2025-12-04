import { Component, inject, computed, Signal } from '@angular/core';
import { ProdutoService } from '../../services/produto/produto';
import { toSignal } from '@angular/core/rxjs-interop';
import { Produto } from '../../types/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private produtoService = inject(ProdutoService);

  produtos: Signal<Produto[]> = toSignal(this.produtoService.listarProdutos(), {
    initialValue: [] as Produto[],
  });

  primeirosProdutos: Signal<Produto[]> = computed(() => {
    return this.produtos().slice(0, 4);
  });
}
