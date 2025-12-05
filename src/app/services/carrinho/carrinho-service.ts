import { Injectable, signal, computed } from '@angular/core';
import { Produto } from '../../types/produto';
import { ItemCarrinho } from '../../types/item-carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly STORAGE_KEY = 'carrinho_produtos';

  private itensSignal = signal<ItemCarrinho[]>(this.carregarDoStorage());

  itens = this.itensSignal.asReadonly();

  totalItens = computed(() => {
    return this.itensSignal().reduce((acc, item) => acc + item.quantidade, 0);
  });

  valorTotal = computed(() => {
    return this.itensSignal().reduce((acc, item) => {
      return acc + item.produto.preco * item.quantidade;
    }, 0);
  });

  constructor() {
    this.itensSignal();
  }

  adicionarProduto(produto: Produto): boolean {
    if (produto.preco < 0) {
      console.error('Não é possível adicionar produto com preço negativo');
      return false;
    }

    const itensAtuais = this.itensSignal();
    const itemExistente = itensAtuais.find((item) => item.produto.id === produto.id);

    if (itemExistente) {
      console.warn('Produto já está no carrinho');
      return false;
    } else {
      this.itensSignal.set([...itensAtuais, { produto, quantidade: 1 }]);
      this.salvarNoStorage();
      return true;
    }
  }

  produtoNoCarrinho(produtoId: number | undefined): boolean {
    if (produtoId === undefined) return false;
    return this.itensSignal().some((item) => item.produto.id === produtoId);
  }

  removerProduto(produtoId: number | undefined): void {
    if (produtoId === undefined) return;

    const novosItens = this.itensSignal().filter((item) => item.produto.id !== produtoId);
    this.itensSignal.set(novosItens);
    this.salvarNoStorage();
  }

  atualizarQuantidade(produtoId: number | undefined, quantidade: number): void {
    if (produtoId === undefined || quantidade < 1) return;

    const novosItens = this.itensSignal().map((item) =>
      item.produto.id === produtoId ? { ...item, quantidade } : item
    );
    this.itensSignal.set(novosItens);
    this.salvarNoStorage();
  }

  limparCarrinho(): void {
    this.itensSignal.set([]);
    this.salvarNoStorage();
  }

  private salvarNoStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.itensSignal()));
    } catch (error) {
      console.error('Erro ao salvar carrinho no localStorage', error);
    }
  }

  private carregarDoStorage(): ItemCarrinho[] {
    try {
      const dados = localStorage.getItem(this.STORAGE_KEY);
      return dados ? JSON.parse(dados) : [];
    } catch (error) {
      console.error('Erro ao carregar carrinho do localStorage', error);
      return [];
    }
  }
}
