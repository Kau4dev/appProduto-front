import {
  Component,
  inject,
  signal,
  OnInit,
  WritableSignal,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ModalConfirm } from '../modal-confirm/modal-confirm';
import { ProdutoService } from '../../services/produto/produto-service';
import { Produto } from '../../types/produto';
import { CarrinhoService } from '../../services/carrinho/carrinho-service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-product-card-list',
  imports: [RouterLink, CommonModule, CurrencyPipe, ModalConfirm, Alert],
  templateUrl: './product-card-list.html',
  styleUrl: './product-card-list.css',
})
export class ProductCardList implements OnInit {
  private produtoService = inject(ProdutoService);
  carrinhoService = inject(CarrinhoService);
  private cdr = inject(ChangeDetectorRef);

  produtos: WritableSignal<Produto[]> = signal<Produto[]>([]);
  mostrarModal = false;
  produtoSelecionado: Produto | null = null;
  mensagemAlerta: string = '';
  tipoAlerta: 'success' | 'danger' | 'warning' | 'info' = 'info';

  ngOnInit() {
    this.carregarProdutos();
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

  adicionarAoCarrinho(produto: Produto) {
    const adicionado = this.carrinhoService.adicionarProduto(produto);
    if (adicionado) {
      this.mostrarAlerta(`${produto.nome} adicionado ao carrinho!`, 'success');
    } else {
      this.mostrarAlerta(`${produto.nome} já está no carrinho!`, 'warning');
    }
  }

  confirmarExclusao() {
    if (!this.produtoSelecionado) return;

    const id = this.produtoSelecionado.id;

    if (id === undefined) {
      console.error('Erro: produto selecionado sem id');
      this.mostrarAlerta('Erro ao excluir produto: id inválido.', 'danger');
      this.fecharModal();
      return;
    }

    this.produtoService.deletarProduto(id).subscribe({
      next: () => {
        this.produtos.update((listaAtual) => listaAtual.filter((p) => p.id !== id));
        this.fecharModal();
        this.mostrarAlerta('Produto excluído com sucesso!', 'success');
      },
      error: (erro) => {
        console.error('Erro ao excluir', erro);
        this.mostrarAlerta('Erro ao excluir produto.', 'danger');
        this.fecharModal();
      },
    });
  }
}
