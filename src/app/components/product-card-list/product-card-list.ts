import { Component, inject, signal, OnInit, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ModalConfirm } from '../modal-confirm/modal-confirm';
import { ProdutoService } from '../../services/produto/produto';
import { Produto } from '../../types/produto';

@Component({
  selector: 'app-product-card-list',
  imports: [RouterLink, CommonModule, CurrencyPipe, ModalConfirm],
  templateUrl: './product-card-list.html',
  styleUrl: './product-card-list.css',
})
export class ProductCardList implements OnInit {
  private produtoService = inject(ProdutoService);

  produtos: WritableSignal<Produto[]> = signal<Produto[]>([]);
  mostrarModal = false;
  produtoSelecionado: Produto | null = null;

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (dados) => this.produtos.set(dados),
      error: (erro) => console.error('Erro ao carregar', erro),
    });
  }
  abrirModal(produto: Produto) {
    this.produtoSelecionado = produto;
    this.mostrarModal = true;
  }

  fecharModal() {
    this.produtoSelecionado = null;
    this.mostrarModal = false;
  }

  confirmarExclusao() {
    if (!this.produtoSelecionado) return;

    const id = this.produtoSelecionado.id;

    if (id === undefined) {
      console.error('Erro: produto selecionado sem id');
      alert('Erro ao excluir produto: id inválido.');
      this.fecharModal();
      return;
    }

    this.produtoService.deletarProduto(id).subscribe({
      next: () => {
        this.produtos.update((listaAtual) => listaAtual.filter((p) => p.id !== id));
        this.fecharModal();
        alert('Produto excluído com sucesso!');
      },
      error: (erro) => {
        console.error('Erro ao excluir', erro);
        alert('Erro ao excluir produto.');
        this.fecharModal();
      },
    });
  }
}
