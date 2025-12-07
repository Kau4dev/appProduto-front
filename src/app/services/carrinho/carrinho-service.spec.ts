import { describe, it, expect, beforeEach, afterEach, vi, MockInstance } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { CarrinhoService } from './carrinho-service';
import { Produto } from '../../types/produto';

describe('CarrinhoService', () => {
  let service: CarrinhoService;
  let localStorageMock: { [key: string]: string };

  let setItemSpy: MockInstance;
  let removeItemSpy: MockInstance;
  let clearSpy: MockInstance;
  // getItemSpy foi removido pois não precisamos verificar se ele foi chamado, apenas configurar o retorno

  const produtoMock: Produto = {
    id: 1,
    nome: 'Produto Teste',
    codigoBarras: '123456',
    descricao: 'Descrição teste',
    preco: 100.0,
  };

  const produtoMock2: Produto = {
    id: 2,
    nome: 'Produto Teste 2',
    codigoBarras: '789012',
    descricao: 'Descrição teste 2',
    preco: 50.0,
  };

  beforeEach(() => {
    localStorageMock = {};

    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => {
      return localStorageMock[key] || null;
    });

    setItemSpy = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: string) => {
        localStorageMock[key] = value;
      });

    removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation((key: string) => {
      delete localStorageMock[key];
    });

    clearSpy = vi.spyOn(Storage.prototype, 'clear').mockImplementation(() => {
      localStorageMock = {};
    });

    TestBed.configureTestingModule({
      providers: [CarrinhoService],
    });

    service = TestBed.inject(CarrinhoService);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  describe('adicionarProduto', () => {
    it('deve adicionar um produto ao carrinho', () => {
      const resultado = service.adicionarProduto(produtoMock);

      expect(resultado).toBe(true);
      expect(service.itens()).toHaveLength(1);
      expect(service.itens()[0].produto).toEqual(produtoMock);
      expect(service.itens()[0].quantidade).toBe(1);
    });

    it('não deve adicionar produto duplicado', () => {
      service.adicionarProduto(produtoMock);
      const resultado = service.adicionarProduto(produtoMock);

      expect(resultado).toBe(false);
      expect(service.itens()).toHaveLength(1);
    });

    it('não deve adicionar produto com preço negativo', () => {
      const produtoInvalido = { ...produtoMock, preco: -10 };
      const resultado = service.adicionarProduto(produtoInvalido);

      expect(resultado).toBe(false);
      expect(service.itens()).toHaveLength(0);
    });

    it('deve adicionar múltiplos produtos diferentes', () => {
      service.adicionarProduto(produtoMock);
      service.adicionarProduto(produtoMock2);

      expect(service.itens()).toHaveLength(2);
    });
  });

  describe('produtoNoCarrinho', () => {
    it('deve retornar true se produto estiver no carrinho', () => {
      service.adicionarProduto(produtoMock);
      expect(service.produtoNoCarrinho(1)).toBe(true);
    });

    it('deve retornar false se produto não estiver no carrinho', () => {
      expect(service.produtoNoCarrinho(1)).toBe(false);
    });

    it('deve retornar false se produtoId for undefined', () => {
      expect(service.produtoNoCarrinho(undefined as any)).toBe(false);
    });
  });

  describe('removerProduto', () => {
    it('deve remover um produto do carrinho', () => {
      service.adicionarProduto(produtoMock);
      service.removerProduto(1);

      expect(service.itens()).toHaveLength(0);
      expect(removeItemSpy).toHaveBeenCalled(); // Verifica se o localStorage foi limpo
    });

    it('não deve fazer nada se produtoId for undefined', () => {
      service.adicionarProduto(produtoMock);
      service.removerProduto(undefined as any);

      expect(service.itens()).toHaveLength(1);
    });

    it('não deve afetar outros produtos ao remover um específico', () => {
      service.adicionarProduto(produtoMock);
      service.adicionarProduto(produtoMock2);
      service.removerProduto(1);

      expect(service.itens()).toHaveLength(1);
      expect(service.itens()[0].produto.id).toBe(2);
    });
  });

  describe('atualizarQuantidade', () => {
    it('deve atualizar a quantidade de um produto', () => {
      service.adicionarProduto(produtoMock);
      service.atualizarQuantidade(1, 5);

      expect(service.itens()[0].quantidade).toBe(5);
    });

    it('não deve atualizar se quantidade for menor que 1', () => {
      service.adicionarProduto(produtoMock);
      service.atualizarQuantidade(1, 0);

      expect(service.itens()[0].quantidade).toBe(1);
    });

    it('não deve atualizar se produtoId for undefined', () => {
      service.adicionarProduto(produtoMock);
      service.atualizarQuantidade(undefined as any, 5);

      expect(service.itens()[0].quantidade).toBe(1);
    });
  });

  describe('limparCarrinho', () => {
    it('deve remover todos os produtos do carrinho', () => {
      service.adicionarProduto(produtoMock);
      service.adicionarProduto(produtoMock2);
      service.limparCarrinho();

      expect(service.itens()).toHaveLength(0);
      expect(clearSpy).toHaveBeenCalled(); // Verifica se o localStorage foi limpo completamente
    });
  });

  describe('totalItens', () => {
    it('deve calcular o total de itens no carrinho', () => {
      service.adicionarProduto(produtoMock);
      service.adicionarProduto(produtoMock2);
      service.atualizarQuantidade(1, 3);

      expect(service.totalItens()).toBe(4);
    });

    it('deve retornar 0 quando carrinho estiver vazio', () => {
      expect(service.totalItens()).toBe(0);
    });
  });

  describe('valorTotal', () => {
    it('deve calcular o valor total do carrinho', () => {
      service.adicionarProduto(produtoMock);
      service.adicionarProduto(produtoMock2);

      expect(service.valorTotal()).toBe(150);
    });

    it('deve calcular valor total considerando quantidades', () => {
      service.adicionarProduto(produtoMock);
      service.atualizarQuantidade(1, 2);

      expect(service.valorTotal()).toBe(200);
    });

    it('deve retornar 0 quando carrinho estiver vazio', () => {
      expect(service.valorTotal()).toBe(0);
    });
  });

  describe('localStorage', () => {
    it('deve salvar itens no localStorage ao adicionar produto', () => {
      service.adicionarProduto(produtoMock);
      expect(setItemSpy).toHaveBeenCalled();
    });

    it('deve salvar itens no localStorage ao remover produto', () => {
      service.adicionarProduto(produtoMock);
      service.removerProduto(1);

      expect(setItemSpy).toHaveBeenCalledTimes(2);
    });

    it('deve salvar itens no localStorage ao atualizar quantidade', () => {
      service.adicionarProduto(produtoMock);
      service.atualizarQuantidade(1, 3);

      expect(setItemSpy).toHaveBeenCalledTimes(2);
    });

    it('deve salvar itens no localStorage ao limpar carrinho', () => {
      service.adicionarProduto(produtoMock);
      service.limparCarrinho();

      expect(setItemSpy).toHaveBeenCalledTimes(2);
    });
  });
});
